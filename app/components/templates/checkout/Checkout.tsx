import { useState } from 'react'
import PaymentSummary from '../../modules/payment-summary/PaymentSummary'
import NavBar from '../../modules/nav-bar/NavBar'
import Footer from '../../modules/footer/Footer'
import ContactUsHeader from '../../modules/Contact-us-header/ContactUsHeader'
import CommunityUpdate from '../../elements/community-update/CommunityUpdate'
import CancellationTerms from '../../elements/cancellationTerms/CancellationTerms'
import CheckoutAccordion from '../../modules/checkout-accordion/CheckoutAccordion'
import { shopItems } from './checkoutData'

/* ---------CARDS--------- */
import ProductCard from '../../elements/cards/product-card/ProductCard'

/* -------------MODAL------------ */
import PaymentModalContent from '../../modules/modal-contents/payment-modal-content/PaymentModalContent'
import AddAddressModalContent from '../../modules/modal-contents/add-address-modal-content/AddAddressModalContent'
import ProductModalContent from '../../modules/modal-contents/product-modal-content/ProductModalContent'
import FailedPaymentModal from '../../modules/modal-contents/failed-payment-modal/FailedPaymentModal'
import BookingConfirmed from '../../modules/modal-contents/booking-confirmed-modal/BookingConfirmed'

/* -------------LAYOUT------------ */
import Layout from '../../layout/Layout'
import Container from '../../layout/Container'

/* ---- COMPONENT FROM MATERIAL-UL------- */
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'

/* ---- COMPONENT FROM styled-components------- */
import styled from 'styled-components'

const StyledGrid = styled(Grid)`
  max-width: 1160px;
  justify-content: space-between;
  margin: auto;
`
const TitleBox = styled.section`
  max-width: 768px;
  display: flex;
  justify-content: space-between;
  margin: 96px 2px 48px 2px;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      margin: 25px 0;
    }
  }
`
const YouMayLike = styled.div`
  font-size: 32px;
  font-weight: 700;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 1rem;
    }
  }
`
const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LeftArrow = styled.span`
  font-size: 20px;
  margin-top: -3px;
  cursor: pointer;
  color: gray;
`
const RightArrow = styled.span`
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  background-image: url('/images/icons/arrow-icons/right-scrow-arrow.svg');
  background-position: center;
  background-size: contain;
  cursor: pointer;
`

/* ---------PRODUCTS------- */
const Products = styled.section`
  margin-bottom: 7.25rem;
  max-width: 768px;
`

/* --------PROMO CODE------ */
const PromoCodeHeading = styled.h3`
  color: #292931;
  font-weight: 700;
  font-size: 20px;
  margin-top: 0;
`

const PromoCodeSearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  margin: 1.12rem 0 1rem 0;
  height: 2.5rem;
  overflow: hidden;
  width: 100%;
  height: 49px;
`

const StyledInputBase = styled(InputBase)`
  width: 90%;
  padding: 5px 3px 5px 1rem;
  font-size: 18px;
`

const ApplyBtnBox = styled.span`
  width: 126px;
  background: #e1f4fa;
  height: 100%;
  display: flex;
  cursor: pointer;
  border-radius: 8px;
`
const ApplyBtn = styled.span`
  margin: auto;
  font-size: 12px;
  font-weight: 600;

  color: ${(props) => props.theme.palette.primary.main};
`


function Checkout() {
  return (
    <Container style={{ backgroundColor: '#F5F6F7' }}>
      <ContactUsHeader />

      <CommunityUpdate
        update={{
          news: 'A note to our community regarding covid-19',
          linkToNews: '#rre',
        }}
      />

      <NavBar />

      <Layout>
    
        <StyledGrid container>
          <Grid item>
            <CheckoutAccordion />
            <section>
              <TitleBox>
                <YouMayLike>You may also like to add</YouMayLike>
                <ArrowWrapper>
                  <LeftArrow> &#8592;</LeftArrow>
                  <RightArrow />
                </ArrowWrapper>
              </TitleBox>

              {/*------ PRODUCTS CARDS ------ */}
              <Products>
                <Grid container>
                  {shopItems.map((itm) => (
                    <Grid item xs={12} lg={4} key={itm.id}>
                      <ProductCard product={itm} />
                    </Grid>
                  ))}
                </Grid>
              </Products>
            </section>
          </Grid>

          <Grid item>
            <aside>
              {/* ------PROMO CODE------ */}
              <PromoCodeHeading>Promo Code</PromoCodeHeading>
              <PromoCodeSearchBox>
                <StyledInputBase placeholder="Promo Code Number" />

                <ApplyBtnBox>
                  <ApplyBtn> Apply </ApplyBtn>
                </ApplyBtnBox>
              </PromoCodeSearchBox>

              {/* ----------- PAYMENT-SUMMARY---------- */}
              <PaymentSummary />

              {/* ----------- CANCELLATION TERMS---------- */}
              <CancellationTerms />
            </aside>
          </Grid>
        </StyledGrid>
      </Layout>

      <main>
        {/* --------MODAL CONTENTS----- */}
        <PaymentModalContent />
        <AddAddressModalContent />
        <FailedPaymentModal />
        <ProductModalContent />
        <BookingConfirmed />
      </main>

      <Footer />
    </Container>
  )
}
export default Checkout
