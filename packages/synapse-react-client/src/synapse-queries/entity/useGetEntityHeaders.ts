import { useQuery, UseQueryOptions } from 'react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '@sage-bionetworks/synapse-types'

export function useGetEntityHeaders(
  references: ReferenceList,
  options?: UseQueryOptions<PaginatedResults<EntityHeader>, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    keyFactory.getEntityHeadersQueryKey(references),
    () => SynapseClient.getEntityHeaders(references, accessToken),
    options,
  )
}

export function useGetEntityHeader(
  entityId: string,
  options?: UseQueryOptions<EntityHeader, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<EntityHeader, SynapseClientError>(
    keyFactory.getEntityHeaderQueryKey(entityId),
    () => SynapseClient.getEntityHeader(entityId, accessToken),
    options,
  )
}
