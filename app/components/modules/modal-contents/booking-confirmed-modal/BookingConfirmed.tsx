import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import CardMedia from '@material-ui/core/CardMedia'
import CloseButton from '../../../elements/buttons/close-button/CloseButton'

const Container = styled.section`
  max-width: 604px;
  padding: 74px;
  background-color: #fff;
  border-radius: 8px;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
      padding: 16px;
    }
  }
`

/* ------- MODAL CLOSE BUTTON------ */
const CloseBtnContainer = styled.section`
  text-align: right;
  font-size: 20px;
`

const DesKtopCloseButton = styled(CloseButton)`
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      display: none;
    }
  }
`
const MobileCloseButton = styled(CloseButton)`
  display: none;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      display: block;
    }
  }
`

const Headingwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      margin-bottom: 24px;
    }
  }
`
const H1 = styled.h1`
  font-weight: 700;
  color: #000;
  font-size: 43px;
  font-weight: 700;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 18px;
      font-weight: 700;
    }
  }
`

const ServiceDetail = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`
const ServiceDetailImage = styled(CardMedia)`
  background: #c1d9e2;
  height: 75px;
  width: 75px;
  border-radius: 48px;
  background-repeat: no-repeat;
  margin-right: 25px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      height: 50px;
      width: 50px;
    }
  }
`
const ServiceName = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 16px;
    }
  }
`
const BookingDate = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #707070;
  margin: 0;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 14px;
    }
  }
`
const H4 = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #7f7a7a;
  margin: 0 0 16px 0;
`

const Bold = styled.span`
  font-size: 20px;
  font-weight: 700;
  font-size: 32px;
  font-weight: 700;
`
const TLS = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const VatWrapper = styled(Wrapper)`
  margin-bottom: 16px;
`

const Box = styled(Wrapper)`
  margin-bottom: 13px;
`
const Price = styled.span`
  font-weight: 600;
  font-size: 18px;
`

const Box2 = styled(Wrapper)`
  margin-bottom: 19px;
`

const RepeatFrequency = styled.span`
  font-weight: 400;
  font-size: 14px;
`

const TopLevelserviceDiscount = styled.span`
  color: #0ba6d9;
  padding: 2px 6px;
  font-weight: bold;
  background: #e1f4fa;
  border-radius: 30px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
`
const DiscountPrice = styled.div`
  font-weight: 600;
  color: #1cc614;
  font-size: 14px;
`

const NetWrapper = styled(Wrapper)`
  margin-bottom: 16px;
  & > span {
    font-size: 18px;
  }
`
const PaymentCard = styled.section`
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  margin: 16px 0 36px 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 26px 0 8px 0;
`
const CardImage = styled(CardMedia)`
  width: 61.71px;
  height: 36.14px;
  background-image: url('/images/payment-method-assets/cash-image.svg');
  background-size: contain;
`

const CardContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const CardTitle = styled.h3`
  font-weight: 600;
  margin: 2px 0 2px 16px;
  font-size: 18px;
`
const CardInnerBox = styled.div`
  display: flex;
  align-items: center;
`
const LineThrough = styled.span`
  text-decoration-line: line-through;
  color: #707070;
  margin-right: 8px;
  font-size: 16px;
`

/* ---------BUTTONS------- */
const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      flex-direction: column;
    }
  }
`
const ToBookingBtn = styled(Button)`
  height: 62px;
  padding: 16px;
  width: 49%;
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => props.theme.palette.primary.main};
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
      margin-bottom: 16px;
    }
  }
`
const HomeBtn = styled(Button)`
  height: 62px;
  background: none;
  color: #000;
  border: 0.5px solid #d5d5d5;
  width: 49%;
  font-size: 16px;
  font-weight: 700;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
      margin-bottom: 16px;
    }
  }
`
function BookingConfirmed() {
  return (
    <Container>
      <CloseBtnContainer>
        {/* ------PRODUCT MODAL CONTENT CLOSE BUTTON------ */}
        <DesKtopCloseButton />
      </CloseBtnContainer>

      <Headingwrapper>
        <H1>Booking Confirmed!</H1> <MobileCloseButton />
      </Headingwrapper>

      <ServiceDetail>
        <ServiceDetailImage />
        <div>
          <ServiceName>Cleaning services</ServiceName>
          <BookingDate>Booked : 1/1/2021 at 11:00 am</BookingDate>
        </div>
      </ServiceDetail>
      <H4>Cleaning / House Keeping</H4>

      <Box>
        <TLS>House Keeping</TLS>
        <Price>AED 300</Price>
      </Box>

      <Box2>
        <div>
          <RepeatFrequency>Repeats Weekly</RepeatFrequency>
          <TopLevelserviceDiscount>10% OFF !</TopLevelserviceDiscount>
        </div>
        <DiscountPrice>- AED 150</DiscountPrice>
      </Box2>

      <NetWrapper>
        <span>Net Amount</span>
        <Price>AED 124</Price>
      </NetWrapper>

      <VatWrapper>
        <span>VAT 5% </span>
        <Price>AED 6.25</Price>
      </VatWrapper>

      <PaymentCard>
        <CardImage image="/images/payment-method-assets/cash-image.svg" />
        <CardContentBox>
          <CardTitle>Cash</CardTitle>

          <CardInnerBox>
            <LineThrough>AED 300</LineThrough>
            <Bold>AED 100</Bold>
          </CardInnerBox>
        </CardContentBox>
      </PaymentCard>

      <BtnWrapper>
        {/* -------BUTTONS----- */}
        <HomeBtn>Back to home</HomeBtn>
        <ToBookingBtn>Track my booking</ToBookingBtn>
      </BtnWrapper>
    </Container>
  )
}

export default BookingConfirmed
