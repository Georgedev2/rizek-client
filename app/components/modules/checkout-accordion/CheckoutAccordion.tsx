import { useState } from 'react'
/* ---- COMPONENT FROM styled-components------- */
import styled from 'styled-components'

import PaymentOptions from '../payment-options/PaymentOptions'
import Location from '../location/Location'
import ServiceDetail from '../service-detail/ServiceDetail'

/* ---- COMPONENT FROM MATERIAL-UL------- */
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const StyledAccordion = styled(Accordion)`
  margin-bottom: 2rem;
  border-radius: 1.5rem !important;
  overflow: hidden; // took care of the top line
  max-width: 48rem; //768px

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      margin: 4px 0px;
    }
  }
`
const StyleAccordionSummary = styled(AccordionSummary)`
  height: 5rem;
  margin: 0 2.25rem;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      height: 4rem;
      margin: 0 1.625rem 0 1rem;
    }
  }
`

const H2 = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  font-weight: 700;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 1.125rem;
    }
  }
`

function CheckoutAccordion() {
  const [accordionData] = useState([
    {
      id: 1,
      accordionSummary: 'Service Details',
      accordionDatails: <ServiceDetail />,
    },
    {
      id: 2,
      accordionSummary: 'Schedule Service',
      accordionDatails: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. `,
    },
    {
      id: 3,
      accordionSummary: 'Location',
      accordionDatails: <Location />,
    },
    { id: 4, accordionSummary: 'Payment', accordionDatails: <PaymentOptions /> },
  ])
  return (
    <section>
      {accordionData.map((itm) => (
        <StyledAccordion key={itm.id}>
          <StyleAccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#09a8dd' }} />}>
            <H2>{itm.accordionSummary}</H2>
          </StyleAccordionSummary>
          <AccordionDetails style={{ borderTop: ' 0.5px solid #D5D5D5' }}>
            {itm.accordionDatails}
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </section>
  )
}

export default CheckoutAccordion
