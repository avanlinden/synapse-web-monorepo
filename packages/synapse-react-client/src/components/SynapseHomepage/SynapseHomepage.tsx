import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Link,
  Typography,
} from '@mui/material'
import RLogo from '../../assets/icons/RLogo'
import Python from '../../assets/icons/Python'
import Terminal from '../../assets/icons/Terminal'
import Java from '../../assets/icons/Java'
import ProjectViewCarousel from '../ProjectViewCarousel/ProjectViewCarousel'
import {
  getEndpoint,
  BackendDestinationEnum,
} from '../../utils/functions/getEndpoint'
import { SynapsePoweredPortal } from './SynapsePoweredPortal'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import SynapseFullLogo from '../../assets/icons/SynapseFullLogo'
import IconSvg from '../IconSvg/IconSvg'
import { SynapseFeatureItem } from './SynapseFeatureItem'
import AccessDataAnywhere from '../../assets/icons/AccessDataAnywhere'
import QueryStructuredData from '../../assets/icons/QueryStructuredData'
import CommunicateFindings from '../../assets/icons/CommunicateFindings'
import RecordProvenance from '../../assets/icons/RecordProvenance'
import ShareYourResearch from '../../assets/icons/ShareYourResearch'
import MintDoi from '../../assets/icons/MintDoi'
import { Box } from '@mui/material'
import { SynapsePriceTableCell } from './SynapsePriceTableCell'
import { ExpandMoreTwoTone } from '@mui/icons-material'
import { SynapsePriceFeatureRow } from './SynapsePriceFeatureRow'
import PlatformOfferingsGrid from './PlatformOfferingsGrid'

export type SynapseHomepageProps = {
  projectViewId: string
}

const buttonSx = {
  textAlign: 'center',
}

export const SynapseHomepage: React.FunctionComponent<SynapseHomepageProps> = ({
  projectViewId,
}) => {
  const { accessToken } = useSynapseContext()
  const LOGIN_LINK = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}#!LoginPlace:0`
  const REGISTRATION_LINK = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}#!RegisterAccount:0`

  // 'v' will resolve to the user's profile ID
  const DASHBOARD_LINK = `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}#!Profile:v/projects`

  const contactUsHref =
    'https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/16/create/85?summary=Synapse%20Hosting%20Plan%20Request&description=%3CPlease%20add%20a%20paragraph%20describing%20your%20project%20and%20your%20expected%20data%20storage%20need%20(e.g.%2C%20duration%20and%20expected%20volume)%3E'

  return (
    <div className="SynapseHomepage">
      <div className="SynapseHomepage__Section PrimaryBackground">
        <div className="HeroContainer">
          <div className="Headline WhiteText">
            <div className="SynapseLogoContainer">
              <SynapseFullLogo />
            </div>
            <div className="HeadlineSentence">
              <span className="Headline-Strong">Organize</span>
              <span className="Headline-Light">
                {' '}
                your digital research assets.
              </span>
            </div>
            <div className="HeadlineSentence">
              <span className="Headline-Strong">Get credit</span>
              <span className="Headline-Light"> for your research.</span>
            </div>
            <div className="HeadlineSentence">
              <span className="Headline-Strong">Collaborate</span>
              <span className="Headline-Light">
                {' '}
                with your colleagues and the public.
              </span>
            </div>
          </div>
          <img
            src="https://s3.amazonaws.com/static.synapse.org/images/homepage-composite.svg"
            className="HeroImage"
            alt=""
          />
          <div className="SignUpButtonContainer">
            {accessToken ? (
              <>
                <Button
                  href={DASHBOARD_LINK}
                  variant="contained"
                  color="light"
                  sx={buttonSx}
                >
                  View Your Dashboard
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      'https://help.synapse.org/docs/Getting-Started.2055471150.html',
                      '_blank',
                      'noopener',
                    )
                  }
                  variant="contained"
                  color="darkPrimary"
                  sx={buttonSx}
                >
                  Get Help With Synapse
                </Button>
              </>
            ) : (
              <>
                <Button
                  href={LOGIN_LINK}
                  variant="contained"
                  color="light"
                  sx={buttonSx}
                >
                  Log in to Synapse
                </Button>
                <Button
                  href={REGISTRATION_LINK}
                  variant="contained"
                  color="darkPrimary"
                  sx={buttonSx}
                >
                  Register Now
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="SearchLinkBar SynapseHomepage__Section">
        <div className="FlexContainer">
          <a
            href="#!Search:"
            rel="noopener noreferrer"
            className="SRC-whiteText ignoreLink"
          >
            <IconSvg icon="searchOutlined" />
            Search Synapse Projects
          </a>
        </div>
      </div>
      <div className="SynapseHomepage__Section WhiteBackground">
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', paddingBottom: '30px' }}
        >
          Synapse Features
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <SynapseFeatureItem
              logo={<AccessDataAnywhere />}
              title="Access your data anywhere"
              description={
                <Typography variant="body1">
                  Synapse provides APIs to store or access your data from the
                  web or programmatically via one of our supported analytical
                  clients (
                  <Link
                    href="https://r-docs.synapse.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    R
                  </Link>
                  ,{' '}
                  <Link
                    href="https://python-docs.synapse.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Python
                  </Link>
                  ,{' '}
                  <Link
                    href="https://python-docs.synapse.org/build/html/CommandLineClient.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Command Line
                  </Link>
                  ).
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SynapseFeatureItem
              logo={<CommunicateFindings />}
              title="Communicate your findings"
              description={
                <Typography variant="body1">
                  Use the Synapse Wiki services to communicate your
                  Project&apos;s research findings by embedding rich content
                  such as images, Tables, Provenance, and even LaTeX equations.
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SynapseFeatureItem
              logo={<RecordProvenance />}
              title="Record Provenance"
              description={
                <Typography variant="body1">
                  Synapse provides tools to record and display provenance of
                  your analysis - giving you credit for each step of the work
                  you do!
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SynapseFeatureItem
              logo={<QueryStructuredData />}
              title="Query Structured Data"
              description={
                <Typography variant="body1">
                  Use Synapse Tables to query structured data right from your
                  web browser, or from any analytical client.
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SynapseFeatureItem
              logo={<ShareYourResearch />}
              title="Share Your Research"
              description={
                <Typography variant="body1">
                  New Synapse Projects are private by default - share with your
                  colleagues, collaborators, and even make your work public!
                  Create Synapse Teams to manage your collaborations.
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SynapseFeatureItem
              logo={<MintDoi />}
              title="Mint a DOI"
              description={
                <Typography variant="body1">
                  A digital object identifier (DOI) provides a persistent and
                  easy way to reference your digital assets in publications -
                  including data, code, or analysis results.
                </Typography>
              }
            />
          </Grid>
        </Grid>
      </div>
      <div className="SynapseHomepage__Section OffWhiteBackground">
        <div className="SynapseHomepage__Section__Centered">
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', paddingBottom: '30px' }}
          >
            Synapse In Action
          </Typography>
          <ProjectViewCarousel entityId={projectViewId} />
        </div>
      </div>
      <div className="SynapseHomepage__Section WhiteBackground">
        <div className="SynapseHomepage__Section__Centered">
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', paddingBottom: '30px' }}
          >
            Powered By Synapse
          </Typography>
          <p>
            Our knowledge portals are community-specific interfaces that enable
            researchers to explore and share data, analyses, and tools.
          </p>
          <div className="PoweredBySynapseFlexContainer">
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/ADKnowledgePortal.svg"
              name="AD Knowledge Portal"
              description="Data and tools for the study of Alzheimer's disease, related dementias, and healthy aging."
              url="https://adknowledgeportal.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/BSMN.svg"
              name="BSMN Portal"
              description="Data and tools to study the role of brain somatic mosaicism in neuropsychiatric disease."
              url="https://bsmn.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/CSBC.svg"
              name="Cancer Complexity Knowledge Portal"
              description="Approaches, data, and tools to address important questions in basic and translational cancer research."
              url="https://cancercomplexity.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/dHealth.svg"
              name="dHealth Digital Health Knowledge Portal"
              description="Discover and download digital and mobile health data, tools, benchmarked outcomes and digital biomarkers."
              url="https://dhealth.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/NFPortal.svg"
              name="NF Data Portal"
              description="Datasets, analysis tools, resources, and publications related to neurofibromatosis and schwannomatosis."
              url="https://nf.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://s3.amazonaws.com/static.synapse.org/images/Psychencode.svg"
              name="Psychencode Knowledge Portal"
              description="Investigation and large-scale data sets of genomic influences on neuropsychiatric disease."
              url="https://psychencode.synapse.org/"
            />
            <SynapsePoweredPortal
              logoUrl="https://arkportal.synapse.org/favicon.svg"
              name="ARK Portal"
              description="The ARK Portal hosts data generated by a network of research teams working collaboratively to deepen the understanding of Arthritis and Autoimmune and Related Diseases."
              url="https://arkportal.synapse.org/"
            />
          </div>
        </div>
      </div>
      <div className="SynapseHomepage__Section OffWhiteBackground">
        <div className="FlexContainer">
          <img
            src="https://s3.amazonaws.com/static.synapse.org/images/data-justice.svg"
            className="SectionGraphic"
            alt=""
          />
          <div className="SectionTextFlexContainer">
            <Typography variant="h2">Our Data Sharing Principles</Typography>
            <div>
              <p className="SectionBody">
                Synapse operates under a complete governance process that
                includes well-documented Terms and Conditions of Use, guidelines
                and operating procedures, privacy enhancing technologies, as
                well as the right of audit and external reviews.
              </p>
            </div>
            <Button
              variant="contained"
              color="primary"
              sx={buttonSx}
              onClick={() =>
                window.open(
                  'https://help.synapse.org/docs/Synapse-Governance.2004255211.html',
                  '_blank',
                  'noopener',
                )
              }
            >
              Learn More About Data Sharing
            </Button>
          </div>
        </div>
      </div>
      <div className="SynapseHomepage__Section WhiteBackground">
        <div className="FlexContainerReverse">
          <div className="ClientFlexContainer SectionGraphic">
            <a
              className="ClientFlexItem"
              href="https://r-docs.synapse.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RLogo />
              <span>R Client</span>
            </a>
            <a
              className="ClientFlexItem"
              href="https://python-docs.synapse.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Python />
              <span>Python Client</span>
            </a>
            <a
              className="ClientFlexItem"
              href="https://python-docs.synapse.org/build/html/CommandLineClient.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Terminal />
              <span>Command Line Client</span>
            </a>
            <a
              className="ClientFlexItem"
              href="https://github.com/Sage-Bionetworks/Synapse-Repository-Services/blob/develop/client/synapseJavaClient/src/main/java/org/sagebionetworks/client/SynapseClient.java"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Java />
              <span>Java Client</span>
            </a>
          </div>
          <div className="SectionTextFlexContainer">
            <Typography variant="h2">
              Synapse Easily Integrates Into Your Workflow
            </Typography>
            <div>
              <p className="SectionBody">
                Create Projects, upload &amp; download Files, generate
                Provenance, query Tables, create Wikis and more all from the
                comfort of your own code using Synapse analytical clients.
              </p>
            </div>
            <Button
              onClick={() =>
                window.open(
                  'https://help.synapse.org/docs/API-Clients-and-Documentation.1985446128.html',
                  '_blank',
                  'noopener',
                )
              }
              variant="contained"
              color="primary"
              sx={buttonSx}
            >
              Learn More About Synapse APIs
            </Button>
          </div>
        </div>
      </div>
      <div className="SynapseHomepage__Section OffWhiteBackground">
        <div className="SynapseHomepage__Section__Centered">
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', paddingBottom: '10px' }}
          >
            Sage’s Data Platform Offerings
          </Typography>
          <p className="SectionBody">
            Sage offers multiple service plans to help you with your data
            sharing needs including NIH Data Management and Sharing plans.
            <br />
            <Link
              href="https://help.synapse.org/docs/Synapse-Pricing.2965078125.html"
              target="_blank"
            >
              Learn more
            </Link>{' '}
            and{' '}
            <Link href={contactUsHref} target="_blank">
              contact us
            </Link>{' '}
            to get started.
          </p>
          <Button
            variant="contained"
            target="_blank"
            href={contactUsHref}
            sx={{ marginTop: '25px' }}
          >
            Contact us for more information
          </Button>
          <Link
            target="_blank"
            href="https://help.synapse.org/docs/FAQ.2047967233.html"
            sx={{ display: 'block', marginTop: '25px', marginBottom: '50px' }}
          >
            View Frequently Asked Questions
          </Link>
          <div role="table">
            <PlatformOfferingsGrid role="rowgroup">
              {/* Div is a placeholder so that all items align in the Pricing table */}
              <div />
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateRows: '65px auto',
                  justifyContent: 'stretch',
                  alignItems: 'stretch',
                }}
              >
                <SynapsePriceTableCell
                  sx={{ backgroundColor: '#b6cedf' }}
                  role="columnheader"
                >
                  <Typography
                    className="no-margin"
                    variant="body1"
                    sx={{ fontWeight: 700 }}
                  >
                    Standard Plan
                  </Typography>
                </SynapsePriceTableCell>
                <SynapsePriceTableCell sx={{ backgroundColor: '#c4d9e4' }}>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    Free
                  </Typography>
                </SynapsePriceTableCell>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateRows: '65px auto',
                  justifyContent: 'stretch',
                  alignItems: 'stretch',
                }}
              >
                <SynapsePriceTableCell
                  sx={{ backgroundColor: '#f0a675' }}
                  role="columnheader"
                >
                  <Typography
                    className="no-margin"
                    variant="body1"
                    sx={{ fontWeight: 700 }}
                  >
                    Managed Plan
                  </Typography>
                </SynapsePriceTableCell>
                <SynapsePriceTableCell sx={{ backgroundColor: '#f9d6c0' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      paddingTop: '20px',
                      marginLeft: '10px',
                      marginRight: '10px',
                    }}
                  >
                    <strong>
                      Starting at $6,000/year, <br />
                      min 5 years*{' '}
                    </strong>
                    <em>
                      <br />
                      Can be customized <br />
                      Recommended for NIH DMSP
                    </em>
                  </Typography>
                </SynapsePriceTableCell>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateRows: '65px auto',
                  justifyContent: 'stretch',
                  alignItems: 'stretch',
                }}
              >
                <SynapsePriceTableCell
                  sx={{ backgroundColor: '#c7e0cb' }}
                  role="columnheader"
                >
                  <Typography
                    className="no-margin"
                    variant="body1"
                    sx={{ fontWeight: 700 }}
                  >
                    Data Coordination Plan
                  </Typography>
                </SynapsePriceTableCell>
                <SynapsePriceTableCell sx={{ backgroundColor: '#d2e6d5' }}>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    Contact Sage**
                  </Typography>
                </SynapsePriceTableCell>
              </Box>
            </PlatformOfferingsGrid>
            <Accordion defaultExpanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreTwoTone />}>
                <Typography sx={{ fontSize: '18px' }} className="no-margin">
                  Project Setup Features
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <SynapsePriceFeatureRow
                  featureDescription="Materials for DMSP plan and budget"
                  managedPlanValue={true}
                  dataCoordinationPlanValue={true}
                />
                <SynapsePriceFeatureRow
                  featureDescription="Setup of Synapse project and storage using our documentation"
                  standardPlanValue="Self-Service"
                  managedPlanValue="Self-Service"
                  dataCoordinationPlanValue="Managed"
                />
                <SynapsePriceFeatureRow
                  featureDescription="DOIs for publications and grants"
                  standardPlanValue={true}
                  managedPlanValue={true}
                  dataCoordinationPlanValue={true}
                />
                <SynapsePriceFeatureRow
                  featureDescription="Consulting with Sage experts to assist with setup, uploading, and establishing F.A.I.R. access to your data"
                  managedPlanValue="5 hours"
                  dataCoordinationPlanValue="Custom"
                />
                <SynapsePriceFeatureRow
                  featureDescription="Help desk support through the life of the project"
                  managedPlanValue="5 hours"
                  dataCoordinationPlanValue="Unlimited"
                />
                <SynapsePriceFeatureRow
                  featureDescription="Dedicated Sage point of contact"
                  dataCoordinationPlanValue={true}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreTwoTone />}>
                <Typography sx={{ fontSize: '18px' }} className="no-margin">
                  Data Storage Features
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <SynapsePriceFeatureRow
                  featureDescription="Data limits ***"
                  standardPlanValue="<=100GB*"
                  managedPlanValue="<=500GB*"
                  dataCoordinationPlanValue="Unlimited"
                />
                <SynapsePriceFeatureRow
                  featureDescription="5 years of secure, guaranteed storage in the cloud"
                  managedPlanValue={true}
                  dataCoordinationPlanValue={true}
                />
                <SynapsePriceFeatureRow
                  featureDescription="Data storage location"
                  standardPlanValue="US Default***"
                  managedPlanValue="US Default***"
                  dataCoordinationPlanValue="Custom"
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreTwoTone />}>
                <Typography sx={{ fontSize: '18px' }} className="no-margin">
                  Data Governance Features
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <SynapsePriceFeatureRow
                  featureDescription="Option to make data available through controlled-access"
                  managedPlanValue={true}
                  dataCoordinationPlanValue={true}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreTwoTone />}>
                <Typography sx={{ fontSize: '18px' }} className="no-margin">
                  Data Access Features
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <SynapsePriceFeatureRow
                  featureDescription="Data access management"
                  standardPlanValue="Self-Service*"
                  managedPlanValue="Self-Service"
                  dataCoordinationPlanValue="Custom"
                />
                <SynapsePriceFeatureRow
                  featureDescription="Seamless data access integration with compute environments"
                  dataCoordinationPlanValue={true}
                />
                <SynapsePriceFeatureRow
                  featureDescription="Customized data portal"
                  standardPlanValue="Basic"
                  managedPlanValue="Basic"
                  dataCoordinationPlanValue={true}
                />
                <SynapsePriceFeatureRow
                  featureDescription="Contract length"
                  managedPlanValue="Length of grant"
                  dataCoordinationPlanValue="Contact Sage‡"
                />
              </AccordionDetails>
            </Accordion>
          </div>

          <Typography
            className="text-align-left"
            sx={{
              fontWeight: 300,
              fontSize: '12px',
              lineHeight: '16px',
              paddingTop: '15px',
            }}
          >
            * Sage can create a customized quote for you if, for example, you
            need to store {'>'}100GB, get help with public data sharing, or want
            a “click wrap” for displaying terms of data sharing. You may also
            qualify for free storage depending on your program.
            <br />
            ** Due to the level of customization afforded, this option does not
            follow a fixed pricing model.
            <br />
            *** Size limitations are removed and regions can be customized if
            you use your own cloud storage bucket.
            <br />‡ 5 years or the length of your grant if you contact us for a
            custom quote.
          </Typography>
        </div>
      </div>
      <div className="SynapseHomepage__Section WhiteBackground">
        <div className="SynapseHomepage__Section__Centered">
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', paddingBottom: '30px' }}
          >
            Our Partners
          </Typography>
          <div className="PartnerFlexContainer">
            <div className="PartnerFlexItem">
              <a
                href="http://www.nhlbi.nih.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="National Heart, Lung, and Blood Institute; NIH"
                  src="https://s3.amazonaws.com/static.synapse.org/images/nih-heart.svg"
                  width={'186px'}
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.nimh.nih.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="National Institute of Mental Health; NIH"
                  src="https://s3.amazonaws.com/static.synapse.org/images/nih-mental.png"
                  width="141px"
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.sloan.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Alfred P. Sloan Foundation"
                  src="https://s3.amazonaws.com/static.synapse.org/images/sloan.svg"
                  width={'186px'}
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.nia.nih.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="National Institute on Aging; NIH"
                  src="https://s3.amazonaws.com/static.synapse.org/images/nih-aging.svg"
                  width={'186px'}
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.lsdfa.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Life Sciences Discovery Fund"
                  src="https://s3.amazonaws.com/static.synapse.org/images/life-sciences.svg"
                  width={'186px'}
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.ctf.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Children's Tumor Foundation"
                  src="https://s3.amazonaws.com/static.synapse.org/images/ctf.svg"
                  width={'186px'}
                />
              </a>
            </div>
            <div className="PartnerFlexItem">
              <a
                href="http://www.n-tap.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Neurofibromatosis Therapeutic Acceleration Program"
                  src="https://s3.amazonaws.com/static.synapse.org/images/ntap.png"
                  width="113px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="SynapseHomepage__Section PrimaryBackground">
        <div className="SynapseHomepage__Section__Centered SynapseHomepage__FlexColumn">
          <h2 className="WhiteText">Sign up for Synapse today</h2>
          <div className="SignUpButtonContainer SynapseHomepage__MarginAutoDesktop">
            {accessToken ? (
              <>
                <Button
                  href={DASHBOARD_LINK}
                  variant="contained"
                  color="light"
                  sx={buttonSx}
                >
                  View Your Dashboard
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      'https://help.synapse.org/docs/Getting-Started.2055471150.html',
                      '_blank',
                      'noopener',
                    )
                  }
                  variant="contained"
                  color="darkPrimary"
                  sx={buttonSx}
                >
                  Get Help With Synapse
                </Button>
              </>
            ) : (
              <>
                <Button
                  href={LOGIN_LINK}
                  variant="contained"
                  color="light"
                  sx={buttonSx}
                >
                  Log in to Synapse
                </Button>
                <Button
                  href={REGISTRATION_LINK}
                  variant="contained"
                  color="darkPrimary"
                  sx={buttonSx}
                >
                  Register Now
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SynapseHomepage
