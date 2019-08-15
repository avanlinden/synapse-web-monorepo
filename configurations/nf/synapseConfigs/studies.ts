import { SynapseConstants } from 'synapse-react-client'
import { HomeExploreConfig } from '../../types/portal-config'
import { facetAliases } from './commonProps'
import loadingScreen from '../loadingScreen'
// @ts-ignore
import studyActiveSvg from '../style/study-active.svg'
// @ts-ignore
import studyCompleteSvg from '../style/study-complete.svg'
import { CommonCardProps } from 'synapse-react-client/dist/containers/CardContainerLogic'

const sql = 'SELECT * FROM syn16787123'
export const studiesSql = sql
const type = SynapseConstants.GENERIC_CARD
const unitDescription = 'Studies'
const rgbIndex = 5

export const studiesCardConfiguration: CommonCardProps = {
  type,
  genericCardSchema: {
    title: 'studyName',
    type: SynapseConstants.STUDY,
    description: 'summary',
    subTitle: 'studyLeads',
    icon: 'studyStatus',
    secondaryLabels: {
      0: { key: 'dataStatus', alias: 'Data Status' },
      1: { key: 'diseaseFocus', alias: 'Disease Focus' },
      2: { key: 'manifestation', alias: 'Manifestation' },
      3: { key: 'fundingAgency', alias: 'Funding Agency' },
      4: { key: 'institutions', alias: 'Institutions' },
      5: { key: 'studyStatus', alias: 'Study Status' },
    },
  },
  iconOptions: {
    Active: studyActiveSvg,
    Completed: studyCompleteSvg
  }
}

const studies: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperFlattened',
    props: {
      facetAliases,
      unitDescription,
      rgbIndex,
      loadingScreen,
      link: 'Explore/Studies',
      linkText: 'Explore Studies',
      facet: 'diseaseFocus',
      initQueryRequest: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        partMask:
            SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
            | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
            | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          sql,
          isConsistent: false,
          limit: 25,
          offset: 0
        }
      }
    }
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperMenu',
    props: {
      rgbIndex,
      unitDescription,
      stackedBarChartConfiguration: {
        loadingScreen,
      },
      name: 'Studies',
      cardConfiguration: {
        ...studiesCardConfiguration,
        internalLinkConfiguration: {
          baseURL: 'Explore/Studies',
          columnValues: ['studyId']
        },
      },
      searchConfiguration: {
        searchable: [
          {
            columnName: 'studyName',
            hintText: ''
          },
          {
            columnName: 'summary',
            hintText: ''
          },
          {
            columnName: 'studyLeads',
            hintText: ''
          },
          {
            columnName: 'studyStatus',
            hintText: 'dataStatus'
          },
          {
            columnName: 'institutions',
            hintText: ''
          },
          {
            columnName: 'diseaseFocus',
            hintText: ''
          },
          {
            columnName: 'manifestation',
            hintText: ''
          },
          {
            columnName: 'fundingAgency',
            hintText: ''
          },
        ]
      },
      facetAliases,
      menuConfig: [
        {
          sql,
          facet: 'studyStatus',
        },
        {
          sql,
          facet: 'dataStatus'
        },
        {
          sql,
          facet: 'institutions'
        },
        {
          sql,
          facet: 'fundingAgency'
        },
        {
          sql,
          facet: 'manifestation'
        },
        {
          sql,
          facet: 'diseaseFocus'
        },
        {
          sql,
        },
      ]
    }
  }
}

export default studies
