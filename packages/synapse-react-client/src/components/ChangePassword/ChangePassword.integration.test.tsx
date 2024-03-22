import React from 'react'
import ChangePassword from './ChangePassword'
import { render, screen, waitFor, within } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import { server } from '../../mocks/msw/server'
import { noop } from 'lodash-es'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import { MemoryRouter } from 'react-router-dom'
import SynapseClient from '../../synapse-client'
import {
  MOCK_USER_ID,
  mockUserProfileData,
} from '../../mocks/user/mock_user_profile'
import {
  getBadRequestChangePasswordHandler,
  getRequires2FAChangePasswordHandler,
  getSuccessfulChangePasswordHandler,
} from '../../mocks/msw/handlers/changePasswordHandlers'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'

const mockDisplayToast = jest
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => noop)

const changePasswordSpy = jest.spyOn(SynapseClient, 'changePassword')

function renderComponent() {
  return render(
    <MemoryRouter>
      <ChangePassword />
    </MemoryRouter>,
    { wrapper: createWrapper() },
  )
}

function getCurrentPasswordField() {
  return screen.getByLabelText(/Current password/i)
}

function getNewPasswordField() {
  return screen.getByLabelText(/New password/i)
}

function getConfirmPasswordField() {
  return screen.getByLabelText(/Confirm password/i)
}

function setUp() {
  const user = userEvent.setup()
  const result = renderComponent()
  const currentPasswordField = getCurrentPasswordField()
  const newPasswordField = getNewPasswordField()
  const confirmPasswordField = getConfirmPasswordField()
  const submitButton = screen.getByRole('button', { name: 'Change Password' })

  return {
    user,
    result,
    currentPasswordField,
    newPasswordField,
    confirmPasswordField,
    submitButton,
  }
}

describe('ChangePassword tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => jest.clearAllMocks())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('allows changing password', async () => {
    server.use(
      getSuccessfulChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      ),
    )

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Password successfully changed.',
        'success',
      )
      expect(currentPasswordField).toHaveValue('')
      expect(newPasswordField).toHaveValue('')
      expect(confirmPasswordField).toHaveValue('')
      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
        username: mockUserProfileData.userName,
        newPassword: newPassword,
        currentPassword: currentPassword,
      })
    })
  })

  it('shows error when the confirm password does not match the new password', async () => {
    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'
    const confirmPassword = 'mismatched'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, confirmPassword)

    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Passwords do not match.',
        'danger',
      )

      expect(currentPasswordField).toHaveValue(currentPassword)
      expect(newPasswordField).toHaveValue(newPassword)
      expect(confirmPasswordField).toHaveValue(confirmPassword)

      expect(changePasswordSpy).not.toHaveBeenCalled()
    })
  })

  it('shows error when the server returns an error', async () => {
    const errorMessage =
      'The provided username/password combination is incorrect'
    server.use(
      getBadRequestChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        errorMessage,
      ),
    )

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await userEvent.click(submitButton)

    await waitFor(() => {
      const alert = screen.getByRole('alert')
      within(alert).getByText(errorMessage)

      expect(mockDisplayToast).not.toHaveBeenCalled()
      expect(currentPasswordField).toHaveValue(currentPassword)
      expect(newPasswordField).toHaveValue(newPassword)
      expect(confirmPasswordField).toHaveValue(newPassword)

      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
        username: mockUserProfileData.userName,
        newPassword: newPassword,
        currentPassword: currentPassword,
      })
    })
  })

  it('supports entering a TOTP if the server requires 2FA', async () => {
    const userId = MOCK_USER_ID
    const twoFaToken = 'mock-2fa-token'
    server.use(
      // The first call will indicate that 2FA is required
      getRequires2FAChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        userId,
        twoFaToken,
      ),
      // Update the mock server so the second request will succeed
      getSuccessfulChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      ),
    )

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await userEvent.click(submitButton)

    // TOTP form should pop up
    let otpInputs: HTMLElement[] = []
    await waitFor(() => {
      otpInputs = screen.getAllByRole('textbox')
      expect(otpInputs).toHaveLength(6)

      const alert = screen.getByRole('alert')
      within(alert).getByText(
        'Two-factor authentication is required to change your password.',
      )

      expect(mockDisplayToast).not.toHaveBeenCalled()
      expect(currentPasswordField).not.toBeInTheDocument()
      expect(newPasswordField).not.toBeInTheDocument()
      expect(confirmPasswordField).not.toBeInTheDocument()

      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
        username: mockUserProfileData.userName,
        newPassword: newPassword,
        currentPassword: currentPassword,
      })
    })

    // Type the code. Once the code is entered, the form should submit automatically
    for (let i = 0; i < otpInputs.length; i++) {
      await userEvent.type(otpInputs[i], String(i + 1))
    }
    await waitFor(() => {
      expect(changePasswordSpy).toHaveBeenCalledTimes(2)
      expect(changePasswordSpy).toHaveBeenLastCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithTwoFactorAuthToken',
        newPassword: newPassword,
        twoFaToken: twoFaToken,
        userId: userId,
        otpCode: '123456',
        otpType: 'TOTP',
      })

      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Password successfully changed.',
        'success',
      )
    })

    // The form should be reset
    expect(getCurrentPasswordField()).toHaveValue('')
    expect(getNewPasswordField()).toHaveValue('')
    expect(getConfirmPasswordField()).toHaveValue('')
  })

  it('supports entering a recovery code if the server requires 2FA', async () => {
    const userId = MOCK_USER_ID
    const twoFaToken = 'mock-2fa-token'
    server.use(
      // The first call will indicate that 2FA is required
      getRequires2FAChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        userId,
        twoFaToken,
      ),
      // Update the mock server so the second request will succeed
      getSuccessfulChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      ),
    )

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await userEvent.click(submitButton)

    const useRecoveryCodeButton = await screen.findByText(
      'Use a backup code instead',
    )
    await userEvent.click(useRecoveryCodeButton)

    const recoveryCode = '1234-5678-abcd-edcb'
    const recoveryCodeTextbox = await screen.findByPlaceholderText(
      'Enter backup code',
    )
    await user.type(recoveryCodeTextbox, recoveryCode)
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    // Type the code. Once the code is entered, the form should submit automatically
    await waitFor(() => {
      expect(changePasswordSpy).toHaveBeenCalledTimes(2)
      expect(changePasswordSpy).toHaveBeenLastCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithTwoFactorAuthToken',
        newPassword: newPassword,
        twoFaToken: twoFaToken,
        userId: userId,
        otpCode: recoveryCode,
        otpType: 'RECOVERY_CODE',
      })

      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Password successfully changed.',
        'success',
      )

      // The form should be reset
      expect(getCurrentPasswordField()).toHaveValue('')
      expect(getNewPasswordField()).toHaveValue('')
      expect(getConfirmPasswordField()).toHaveValue('')
    })
  })

  it('shows an error when the 2FA submission is invalid', async () => {
    const userId = MOCK_USER_ID
    const twoFaToken = 'mock-2fa-token'
    const errorMessage = 'The provided code is invalid.'
    server.use(
      // The first call will indicate that 2FA is required
      getRequires2FAChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        userId,
        twoFaToken,
      ),
      // Update the mock server so the next request will fail with a meaningful error
      getBadRequestChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        errorMessage,
      ),
    )

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await userEvent.click(submitButton)

    // TOTP form should pop up
    let otpInputs: HTMLElement[] = []
    await waitFor(() => {
      otpInputs = screen.getAllByRole('textbox')
      expect(otpInputs).toHaveLength(6)

      const alert = screen.getByRole('alert')
      within(alert).getByText(
        'Two-factor authentication is required to change your password.',
      )

      expect(mockDisplayToast).not.toHaveBeenCalled()
      expect(currentPasswordField).not.toBeInTheDocument()
      expect(newPasswordField).not.toBeInTheDocument()
      expect(confirmPasswordField).not.toBeInTheDocument()

      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
        username: mockUserProfileData.userName,
        newPassword: newPassword,
        currentPassword: currentPassword,
      })
    })

    // Type the code. Once the code is entered, the form should submit automatically
    for (let i = 0; i < otpInputs.length; i++) {
      await userEvent.type(otpInputs[i], String(i + 1))
    }
    await waitFor(() => {
      // The error should be shown on the screen
      screen.getByText(errorMessage)

      expect(changePasswordSpy).toHaveBeenCalledTimes(2)
      expect(changePasswordSpy).toHaveBeenLastCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithTwoFactorAuthToken',
        newPassword: newPassword,
        twoFaToken: twoFaToken,
        userId: userId,
        otpCode: '123456',
        otpType: 'TOTP',
      })

      expect(mockDisplayToast).not.toHaveBeenCalled()
    })

    // The TOTP form should still be shown
    otpInputs = screen.getAllByRole('textbox')
    expect(otpInputs).toHaveLength(6)
  })
})
