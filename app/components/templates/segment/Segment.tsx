import { useState } from 'react'
import Footer from '../../modules/footer/Footer'
import NavBar from '../../modules/nav-bar/NavBar'
import Header from '../../modules/header/Header'

import Layout from '../../layout/Layout'
import Container from '../../layout/Container'

import TestimonialCard from '../../elements/cards/testimonial-card/TestimonialCard'
import SubSubserviceCard from '../../elements/cards/sub-sub-service-card/SubSubserviceCard'

/* ---- COMPONENT FROM MATERIAL-UL------- */
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

/* ---- COMPONENT FROM STYLED-COMPONENTS------- */
import styled from 'styled-components'

const StyledH2 = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 16px 0;
`
const SubSubServiceCards=styled.section`
margin: 48px 0 96px 0;
`
const Sevice = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 0 96px 0;
`
const ServiceDetail = styled.section`
  width: 50%;
`
const StyledImg = styled.img`
  max-height: 476px;
  max-width: 572px;
`

const StyledParagraph = styled.p`
  color: #6b6b6b;
  margin: 0 0 16px 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
`
const StyledH3 = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 16px 0;
`
const StyledSpan = styled.span`
  display: inline-block;
  color: #6b6b6b;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
`
const CircleIcon = styled.span`
  color: ${(props) => props.theme.palette.primary.main};
  margin-right: 20px;
`

/* --------- SUB SERVICES------- */

const SubService = styled(Button)`
  border-radius: 3rem;
  color: #7f7f83;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.3rem 1rem;
  border: 1px solid #7f7f83;
  margin: 0 1rem 0.5rem 0;
  background-color: transparent;
`

const SubServices = styled.section`
  margin: 4rem 0 4.5rem 0;
`

const SelectedSubServices = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.6rem;
`

const RightLine = styled.div`
  width: 87%;
  height: 1px;
  background-color: #d3dce5;
`

/* ------- TESTIMONIAL BLOCK -------- */
const TestimonialBlockH1 = styled.section`
  font-size: 43px;
  font-weight: 700;
  text-align: center;
  max-width: 550px;
  margin: 60px auto;
`

const TestimonialCards = styled.section`
  display: flex;
  background-color: transparent;
  padding-bottom: 30px;
`

function Segment() {
  const navigation = [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/',
      label: 'clearning service',
    },
  ]
  const [list, setList] = useState([
    'House Keeping With Materials',
    'House Keeping Without Materials',
    'Sofa Cleaning',
    'Deep Cleaning',
    'Carpet Cleaning',
    'Commercial Disinfection',
    'Residential Disinfection',
  ])

  const [subServices, setSubServices] = useState([
    'House Keeping',
    'Deep Cleaning',
    'Residential Disinfection',
    'Commercial Disinfection',
  ])

  const [serviceBelow, setServiceBelow] = useState([
    { name: 'Apartment', serviceCharge: '339.0', image: '/images/service-assets/kitchen.png' },
    { name: 'Villa', serviceCharge: '999.0', image: '/images/service-assets/kitchen.png' },
    { name: 'Kitchen', serviceCharge: '150.0', image: '/images/service-assets/kitchen.png' },
    { name: 'Bathroom', serviceCharge: '120.0', image: '/images/service-assets/kitchen.png' },
  ])

  const [testimonies] = useState([
    {
      id: 0,
      name: 'Olga Briggs',
      date: 'January 22,2021',
      testimony:
        'Rizek cleaning services were extremely helpful during times like this. My hero was professional, timely and very well prepared! I specially appreciated all the covid 19 measures',
      stars: [1, 2, 3, 4],
    },
    {
      id: 1,
      name: 'John Doe',
      date: 'January 22,2021',
      testimony:
        'Rizek cleaning services were extremely helpful during times like this. My hero was professional, timely and very well prepared! I specially appreciated all the covid 19 measures',
      stars: [1, 2, 3, 4],
    },
  ])
  return (
    <Container>
      {/* -------NAVIGATION BAR-------- */}
      <NavBar />

      {/* ------TITLE & BANNER BLOCK----- */}
      <Header
        // navigation={navigation}
        bannerImage="/images/booking-assets/clearning-lady-light.png"
        headings={['clearning service', 'Sit relax and trust our cleaning heroes']}
      />

      <Layout>
        {/* ------TOP LEVEL SERVICES------ */}
        <SubServices>
          {subServices.map((itm, idx) => (
            <SubService key={idx}>{itm}</SubService>
          ))}
        </SubServices>

        <SelectedSubServices>
          <h3>House Keeping</h3> <RightLine />
        </SelectedSubServices>

        {/* ------THE SUB-SUB-SERVICE OF THE SELECTED SUB-SERVICE ------ */}
        <SubSubServiceCards>
          <Grid container >
            {serviceBelow.map((itm, idx) => (
              <Grid item xs={12} sm={4} lg={3} key={idx}>
                <SubSubserviceCard subSubService={itm} />
              </Grid>
            ))}
          </Grid>
        </SubSubServiceCards>

        <Sevice>
          {/* ------SEGMENT OR SERVICE DESCRIPTION BLOCK------- */}
          <ServiceDetail>
            <StyledH2>Description</StyledH2>
            <StyledParagraph>
              We specialize in commercial and residential cleaning using earth-friendly cleaning
              products. One time or regular residential cleaning. One time or regular commercial
              cleaning.
            </StyledParagraph>
            <StyledH3>Includes</StyledH3>

            <ul>
              {list.map((itm, idx) => (
                <div key={idx}>
                  <CircleIcon>&#x25CF;</CircleIcon> <StyledSpan>{itm}</StyledSpan>
                </div>
              ))}
            </ul>
          </ServiceDetail>

          <StyledImg src="images/service-assets/rizek-cleaner.png" alt="" />
        </Sevice>

        {/* ------- TESTIMONIAL BLOCK -------- */}
        <TestimonialBlockH1>
          <span>What Customers Like about Cleaning Services</span>
        </TestimonialBlockH1>

        <TestimonialCards>
          {testimonies.map((itm) => (
            <TestimonialCard testimonial={itm} />
          ))}
        </TestimonialCards>
      </Layout>
      <Footer />
    </Container>
  )
}

export default Segment
