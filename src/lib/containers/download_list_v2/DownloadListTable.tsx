import React, { useState, useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { DownloadListItemResult } from '../../utils/synapseTypes/DownloadListV2/DownloadListItemResult'
import { toError } from '../../utils/ErrorUtils'
import { Dropdown, Table } from 'react-bootstrap'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import { useGetAvailableFilesToDownloadInfinite } from '../../utils/hooks/SynapseAPI/useGetAvailableFilesToDownload'
import { useInView } from 'react-intersection-observer'
import {
  AvailableFilter,
  Sort,
  SortField,
} from '../../utils/synapseTypes/DownloadListV2/QueryRequestDetails'
import { DownloadListItem } from '../../utils/synapseTypes/DownloadListV2/DownloadListItem'
import { SynapseClient } from '../../utils'
import moment from 'moment'
import UserCard from '../UserCard'
import SortIcon from '../../assets/icons/Sort'
import { Direction, FileHandleAssociateType } from '../../utils/synapseTypes'
import { useSynapseContext } from '../../utils/SynapseContext'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import IconSvg from '../IconSvg'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import { SkeletonTable } from '../../assets/skeletons/SkeletonTable'
import DirectDownload from '../DirectDownload'
import { displayToast } from '../ToastMessage'
export const TESTING_TRASH_BTN_CLASS = 'TESTING_TRASH_BTN_CLASS'
export const TESTING_CLEAR_BTN_CLASS = 'TESTING_CLEAR_BTN_CLASS'

export default function DownloadListTable() {
  const { accessToken } = useSynapseContext()
  const handleError = useErrorHandler()
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()
  const [sort, setSort] = useState<Sort | undefined>(undefined)
  const [filter, setFilter] = useState<AvailableFilter | undefined>(undefined)
  const {
    data,
    status,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isError,
    error: newError,
    refetch,
  } = useGetAvailableFilesToDownloadInfinite(sort, filter)

  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError])

  useEffect(() => {
    if (
      status === 'success' &&
      !isFetchingNextPage &&
      hasNextPage &&
      fetchNextPage &&
      inView
    ) {
      fetchNextPage()
    }
  }, [status, isFetchingNextPage, hasNextPage, fetchNextPage, inView])

  const allRows = data?.pages.flatMap(page => page.page) ?? []

  const getFilterDisplayText = (f: AvailableFilter) => {
    if (!f) {
      return 'All'
    } else if (f == 'eligibleForPackaging') {
      return 'Only Eligible'
    } else {
      return 'Only Ineligible'
    }
  }
  const removeItem = async (item: DownloadListItem) => {
    try {
      await SynapseClient.removeItemFromDownloadListV2(item, accessToken)
      refetch()
    } catch (err) {
      console.error(err)
    }
  }

  const showInteractiveSortIcon = (columnSortBy: SortField) => {
    return (
      setSort && (
        <SortIcon
          role="button"
          style={{ height: '20px' }}
          active={sort?.field === columnSortBy}
          direction={
            sort?.field === columnSortBy
              ? sort.direction === 'DESC'
                ? Direction.DESC
                : Direction.ASC
              : Direction.DESC
          }
          onClick={() => {
            const direction =
              columnSortBy === sort?.field
                ? sort.direction === 'ASC'
                  ? 'DESC'
                  : 'ASC'
                : 'DESC'
            setSort({
              field: columnSortBy,
              direction,
            })
          }}
        />
      )
    )
  }
  const availableFiltersArray: AvailableFilter[] = [
    undefined,
    'eligibleForPackaging',
    'ineligibleForPackaging',
  ]
  return (
    <>
      <div className="filterFilesContainer">
        <span className="filterFilesByText">Filter Files By</span>
        <Dropdown>
          <Dropdown.Toggle variant="gray-primary-500" id="dropdown-basic">
            {getFilterDisplayText(filter)}
          </Dropdown.Toggle>
          <Dropdown.Menu role="menu">
            {availableFiltersArray.map(availableFilter => (
              <Dropdown.Item
                role="menuitem"
                key={`${getFilterDisplayText(availableFilter)}-filter-option`}
                onClick={() => {
                  setFilter(availableFilter)
                }}
              >
                {getFilterDisplayText(availableFilter)}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {allRows.length > 0 && (
        <>
          <Table
            striped={true}
            responsive={true}
            className="DownloadListTableV2"
          >
            <thead>
              <tr>
                <th>
                  {/* Eligible/Ineligible icon */}
                </th>
                <th>
                  Name
                  <span>{showInteractiveSortIcon('fileName')}</span>
                </th>
                <th>
                  Size
                  <span>{showInteractiveSortIcon('fileSize')}</span>
                </th>
                <th>
                  Project
                  <span>{showInteractiveSortIcon('projectName')}</span>
                </th>
                <th>
                  SynID
                  <span>{showInteractiveSortIcon('synId')}</span>
                </th>
                <th>
                  Added On
                  <span>{showInteractiveSortIcon('addedOn')}</span>
                </th>
                <th>
                  Created By
                  <span>{showInteractiveSortIcon('createdBy')}</span>
                </th>
                <th>
                  Created On
                  <span>{showInteractiveSortIcon('createdOn')}</span>
                </th>
                <th className="stickyColumn">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {allRows.map((item: DownloadListItemResult) => {
                if (item) {
                  const addedOn = moment(item.addedOn).format('L LT')
                  const createdOn = moment(item.createdOn).format('L LT')
                  return (
                    <tr key={item.fileEntityId}>
                      <td className={item.isEligibleForPackaging ? '' : 'ineligibleForPackagingTd'}>
                        {item.isEligibleForPackaging && (
                          <span
                            data-for={`${item.fileEntityId}-eligible-tooltip`}
                            data-tip="Eligible for packaging"
                            className="eligibileIcon"
                          >
                            <ReactTooltip
                              delayShow={TOOLTIP_DELAY_SHOW}
                              place="right"
                              type="dark"
                              effect="solid"
                              id={`${item.fileEntityId}-eligible-tooltip`}
                            />
                            <IconSvg
                              options={{
                                icon: 'packagableFile',
                              }}
                            />
                          </span>
                        )}
                        {!item.isEligibleForPackaging && (
                          <span
                            data-for={`${item.fileEntityId}-ineligible-tooltip`}
                            data-tip="This file is ineligible for Web packaging <br />because it is >100MB, or it is an external link,<br />or it is not stored on Synapse native storage"
                            className="ineligibileIcon"
                          >
                            <ReactTooltip
                              delayShow={TOOLTIP_DELAY_SHOW}
                              place="right"
                              type="dark"
                              effect="solid"
                              multiline={true}
                              id={`${item.fileEntityId}-ineligible-tooltip`}
                            />
                            <IconSvg
                              options={{
                                icon: 'warningOutlined',
                              }}
                            />
                          </span>
                        )}
                      </td>
                      <td>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${item.fileEntityId}.${item.versionNumber}`}
                        >
                          {item.fileName}
                        </a>
                      </td>
                      <td>
                        {item.fileSizeBytes &&
                          calculateFriendlyFileSize(item.fileSizeBytes)}
                      </td>
                      <td>{item.projectName}</td>
                      <td>{item.projectId}</td>
                      <td>{addedOn}</td>
                      <td>
                        <UserCard
                          size={'SMALL USER CARD'}
                          ownerId={item.createdBy}
                        />
                      </td>
                      <td>{createdOn}</td>
                      <td className="stickyColumn">
                        <div className="actionsContainer">
                          <span className="downloadItem">
                            <DirectDownload
                              associatedObjectId={item.fileEntityId}
                              associatedObjectType={FileHandleAssociateType.FileEntity}
                              entityVersionNumber={item.versionNumber.toString()}
                              displayFileName={false}
                              onClickCallback={() => {
                                removeItem({
                                  fileEntityId: item.fileEntityId,
                                  versionNumber: item.versionNumber,
                                })
                                displayToast(
                                  `${item.fileName} has been removed from your list.`,
                                  'success',
                                  {title: 'File Download'}
                                )
                              }}
                            />
                          </span>
                          {/* <span className="programmaticAccessItem"
                            data-for={`${item.fileEntityId}-programmatic-instructions-tooltip`}
                            data-tip="Programmatic download options">
                              <ReactTooltip
                                delayShow={TOOLTIP_DELAY_SHOW}
                                place="left"
                                type="dark"
                                effect="solid"
                                id={`${item.fileEntityId}-programmatic-instructions-tooltip`}
                            />
                            TODO
                            </span>
                          */}
                          <span className="removeItem"
                            data-for={`${item.fileEntityId}-removeitem-tooltip`}
                            data-tip="Remove from Download List"
                          >
                            <ReactTooltip
                              delayShow={TOOLTIP_DELAY_SHOW}
                              place="left"
                              type="dark"
                              effect="solid"
                              id={`${item.fileEntityId}-removeitem-tooltip`}
                            />
                            <button
                              className={TESTING_TRASH_BTN_CLASS}
                              onClick={() => {
                                removeItem({
                                  fileEntityId: item.fileEntityId,
                                  versionNumber: item.versionNumber,
                                })
                              }}
                            >
                              <IconSvg
                                  options={{
                                    icon: 'removeCircle',
                                  }}
                                />
                            </button>
                          </span>
                        </div>
                      </td>
                    </tr>
                  )
                } else return false
              })}
              {/* To trigger loading the next page */}
              <tr ref={ref} />
            </tbody>
          </Table>
        </>
      )}
      {isLoading && (
        <SkeletonTable numCols={5} numRows={3} />
      )}
    </>
  )
}
