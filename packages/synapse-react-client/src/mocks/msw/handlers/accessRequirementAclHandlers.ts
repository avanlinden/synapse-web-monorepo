import { SynapseApiResponse } from '../handlers'
import { AccessControlList } from '@sage-bionetworks/synapse-types'
import { mockAccessRequirementAcls } from '../../mockAccessRequirementAcls'
import { rest } from 'msw'
import { ACCESS_REQUIREMENT_ACL } from '../../../utils/APIConstants'

export function getAccessRequirementAclHandler(backendOrigin: string) {
  return rest.get(
    `${backendOrigin}${ACCESS_REQUIREMENT_ACL(':id')}`,

    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<AccessControlList> = {
        reason: `Mock Service worker could not find an ACL for access requirement with ID ${req.params.id}`,
      }
      const acl = mockAccessRequirementAcls.find(
        acl => acl.id === req.params.id,
      )

      if (acl) {
        response = acl
        status = 200
      }

      return res(ctx.status(status), ctx.json(response))
    },
  )
}

export function deleteAccessRequirementAcl(backendOrigin: string) {
  return rest.delete(
    `${backendOrigin}${ACCESS_REQUIREMENT_ACL(':id')}`,
    async (req, res, ctx) => {
      return res(ctx.status(200))
    },
  )
}

export function createAccessRequirementAcl(backendOrigin: string) {
  return rest.post(
    `${backendOrigin}${ACCESS_REQUIREMENT_ACL(':id')}`,
    async (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(req))
    },
  )
}

export function updateAccessRequirementAcl(backendOrigin: string) {
  return rest.put(
    `${backendOrigin}${ACCESS_REQUIREMENT_ACL(':id')}`,
    async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(req))
    },
  )
}

export function getAllAccessRequirementAclHandlers(backendOrigin: string) {
  return [
    getAccessRequirementAclHandler(backendOrigin),
    deleteAccessRequirementAcl(backendOrigin),
    createAccessRequirementAcl(backendOrigin),
    updateAccessRequirementAcl(backendOrigin),
  ]
}
