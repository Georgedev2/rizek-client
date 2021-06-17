import React from 'react'
import MuiButton from '@material-ui/core/Button'
import styled from 'styled-components'

const PaymentSummaryWrapper = styled.section`
  max-width: 22.19rem;
  padding: 36px 24px;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: 1.5rem 0;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
    }
  }
`

const H1 = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 1.5rem 0;
  font-weight: 700;
  color: #000;
  line-height: 32.68px;
`
const H4 = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: #7f7a7a;
  margin-bottom: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const TLS = styled(Wrapper)`
  padding-bottom: 16px;
`
const TLSName = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const RepeatBookingInfo = styled(Wrapper)`
  padding-bottom: 16px;
  border-bottom: 0.5px solid #d5d5d5;
`

const RepeatFrequency = styled.span`
  font-size: 14px;
`
const FrequencyDiscount = styled.span`
  color: #0ba6d9;
  padding: 4px 8px;
  background: #e1f4fa;
  border-radius: 30px;
  margin-left: 17px;
  font-size: 14px;
  font-weight: 600;
`

const DiscountPrice = styled.div`
  color: #1cc614;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
`
const NetAmtWrapper = styled(Wrapper)`
  padding: 1rem 0;
  border-bottom: 0.5px solid #d5d5d5;
`
const NetAmt = styled.span`
  font-size: 18px;
`
const VATWrapper = styled(NetAmtWrapper)``
const Bold = styled.span`
  font-size: 32px;
  font-weight: 700;
`
const LineThrough = styled.span`
  text-decoration-line: line-through;
  color: #707070;
  font-size: 20px;
`

const AmountPayable = styled.span`
  display: block;
  color: #7f7a7a;
  font-size: 14px;
  font-weight: 400;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      display: none;
    }
  }
`
const AmountPayableTop = styled(AmountPayable)`
  display: none;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      display: block;
    }
  }
`

const Wrapper2 = styled(Wrapper)`
  border-bottom: none;
  padding-top: 16px;
`

const PaymentBtn = styled(MuiButton)`
  justify-content: space-between;
  background: #afadad;
  border-radius: 8px;
  color: #fff;
  margin-top: 15px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    background-color: #afadad;
  }

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      background: #4c97c7;
    }
  }
`
//React.FC
function PaymentSummary() {
  return (
    <PaymentSummaryWrapper>
      <H1>Summary</H1>
      <H4>Cleaning</H4>

      <TLS>
        <TLSName>House Keeping</TLSName>
        <Price>AED 300</Price>
      </TLS>

      <RepeatBookingInfo>
        <div>
          <RepeatFrequency>Repeats Weekly</RepeatFrequency>
          <FrequencyDiscount>10% OFF !</FrequencyDiscount>
        </div>
        <DiscountPrice>- AED 150</DiscountPrice>
      </RepeatBookingInfo>

      <NetAmtWrapper>
        <NetAmt>Net Amount</NetAmt>
        <Price>AED 124</Price>
      </NetAmtWrapper>

      <VATWrapper>
        <span>VAT 5% </span>
        <Price>AED 6.25</Price>
      </VATWrapper>

      <Wrapper2>
        <div>
          <AmountPayableTop>Amount payable</AmountPayableTop>
          <Bold>AED 100</Bold>
          <AmountPayable>Amount payable</AmountPayable>
        </div>

        <LineThrough>AED 300</LineThrough>
      </Wrapper2>

      <PaymentBtn fullWidth endIcon={<span>&rarr;</span>}>
        Pay
      </PaymentBtn>
    </PaymentSummaryWrapper>
  )
}

export default PaymentSummary
