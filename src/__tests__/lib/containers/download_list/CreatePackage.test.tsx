import * as React from 'react'
import { shallow } from 'enzyme'
import {
  CreatePackage,
  CreatePackageProps,
  templateDownload,
} from 'lib/containers/download_list/CreatePackage'
import { Alert } from 'react-bootstrap'
import { DownloadOrder } from 'lib/utils/jsonResponses/Download/DownloadOrder'
import { act } from 'react-dom/test-utils'
import { BulkFileDownloadResponse } from 'lib/utils/jsonResponses/BulkFileDownloadResponse'
import { FileHandleAssociateType } from 'lib/utils/jsonResponses/FileHandleAssociation'
import { FileDownloadStatus } from 'lib/utils/jsonResponses/FileDownloadSummary'

describe('it performs all functionality ', () => {
  const SynapseClient = require('../../../../lib/utils/SynapseClient')

  const updateDownloadListMock = jest.fn()
  const props: CreatePackageProps = {
    updateDownloadList: updateDownloadListMock,
  }
  const downloadOrderMock: DownloadOrder = {
    files: [],
    createdBy: '',
    createdOn: '',
    orderId: '',
    zipFileName: '',
    totalNumberOfFiles: 0,
    totalSizeBytes: 0,
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<CreatePackage {...props} />)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(Alert)).toHaveLength(0)
  })
  it('creates a package and downloads it', async () => {
    /*
      Step 1: Setup api response
    */
    SynapseClient.getDownloadOrder = jest
      .fn()
      .mockResolvedValue(downloadOrderMock)
    const bulkFileDownloadResponseMock: BulkFileDownloadResponse = {
      concreteType:
        'org.sagebionetworks.repo.model.file.BulkFileDownloadResponse',
      resultZipFileHandleId: '',
      userId: '',
      fileSummary: [
        {
          fileHandleId: '',
          associateObjectId: '',
          associateObjectType: FileHandleAssociateType.FileEntity,
          status: FileDownloadStatus.SUCCESS,
          zipEntryName: '',
          failureMessage: '',
          failureCode: null,
        },
      ],
    }
    SynapseClient.getBulkFiles = jest
      .fn()
      .mockResolvedValue(bulkFileDownloadResponseMock)
    const wrapper = shallow(<CreatePackage {...props} />)
    // https://reactjs.org/docs/testing-recipes.html#act
    await act(async () => {
      // Step 2: Enter name for zip file
      wrapper.find('input').simulate('change', {
        currentTarget: {
          value: 'text',
        },
      })
      // Step 3: Call create package
      wrapper.find('.action-button').simulate('click')
    })
    // Verify UI
    expect(wrapper.find('.package-created')).toHaveLength(1)
    expect(wrapper.find(Alert)).toHaveLength(0)
    expect(wrapper.find('form')).toHaveLength(0)
    expect(updateDownloadListMock).not.toHaveBeenCalled()
    // Step 4: Call download
    // Setup API call
    const urlMock = ''
    SynapseClient.getFileHandleByIdURL = jest.fn().mockResolvedValue(urlMock)
    await act(async () => {
      /*
        Step 5: button press
      */
      wrapper.find('.action-button').simulate('click')
    })
    expect(wrapper.find(Alert).text()).toEqual(`${1} ${templateDownload}`)
    expect(updateDownloadListMock).toHaveBeenCalled()
  })
  it('Fails to creates a package without a filename', async () => {
    const error = {
      reason: 'Failed to download any files',
    }
    SynapseClient.getDownloadOrder = jest.fn().mockRejectedValue(error)
    const wrapper = shallow(<CreatePackage {...props} />)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(Alert)).toHaveLength(0)
    await act(async () => {
      /*
        Step 5: button press
      */
      wrapper.find('.action-button').simulate('click')
    })
  })
  it('Fails to creates a package when an http error occurs', async () => {
    const error = {
      reason: 'API call failed',
    }
    // mock failed api call
    SynapseClient.getDownloadOrder = jest.fn().mockRejectedValue(error)
    const wrapper = shallow(<CreatePackage {...props} />)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(Alert)).toHaveLength(0)
    await act(async () => {
      // setup filename
      wrapper.find('input').simulate('change', {
        currentTarget: {
          value: 'text',
        },
      })
      // make create package ca;;
      wrapper.find('.action-button').simulate('click')
    })
    expect(wrapper.find(Alert).text()).toEqual(error.reason)
  })
})
