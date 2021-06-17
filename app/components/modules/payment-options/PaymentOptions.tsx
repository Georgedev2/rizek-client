import { useState } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import AddCircleIcon from '@material-ui/icons/AddCircle'

const PaymentOptionsWrapper = styled.div`
  width: 100%;
`
const PaymentCard = styled(Card)`
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  align-items: center;
  width: 100%;
`

const CardImage = styled(CardMedia)`
  height: 40px;
  width: 66px;
  background-image: url('/images/payment-method-assets/cash-image.svg');
  background-size: contain;
`
const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 2px 0;
`
const Paragraphy = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 2px 0;
  color: #a9a9ad;
`
const CardContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 2px 10px;
  padding: 16px 0 20px 0px;
`
const CardEnding = styled.span`
  font-size: 12px;
  font-weight: 400;
`
const RedDeleteIcon = styled.span`
  background-image: url('/images/icons/delete_icons/red-delete-icon.svg');
  background-size: contain;
  background-position: center;
  cursor: pointer;
  height: 19px;
  width: 17px;
`
const RadionButton = styled.input`
  margin-right: 10px;
  cursor: pointer;
`
const StlyledAddCircleIcon = styled(AddCircleIcon)`
  width: 17px;
  height: 17px;
  color: ${(props) => props.theme.palette.primary.main};
  margin-right: 10px;
`
const PaybyCardWrapper = styled.div`
  border-bottom: 1px solid #f1f1f1;
  color: #09a8dd;
  color: ${(props) => props.theme.palette.primary.main};
`
const InnerWidth = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 16px 0 20px 5px;
  cursor: pointer;
`
function PaymentOptions() {
  const [paymentOptions] = useState([
    {
      id: 2,
      optionName: 'Visa',
      optionImage: '/images/payment-method-assets/visa-image.png',
      optionEnding: 9674,
    },
    {
      id: 2,
      optionName: 'Visa',
      optionImage: '/images/payment-method-assets/visa-image.png',
      optionEnding: 9674,
    },
  ])

  return (
    <PaymentOptionsWrapper>
      <PaymentCard elevation={0}>
        <CardImage image="/images/payment-method-assets/cash-image.svg" />
        <CardContent>
          <div>
            <CardTitle>Cash</CardTitle>
            <Paragraphy>Please note that cash is not an option for this booking</Paragraphy>
          </div>
        </CardContent>
      </PaymentCard>

      {paymentOptions.map((itm) => (
        <PaymentCard  key={itm.id}>
          <RadionButton type="radio" name="" id="" />
          <CardImage image={itm.optionImage} />
          <CardContentWrapper>
            <div>
              <CardTitle>{itm.optionName}</CardTitle>
              <CardEnding>
                Ending <span>{itm.optionEnding}</span>
              </CardEnding>
            </div>

            <RedDeleteIcon />
          </CardContentWrapper>
        </PaymentCard>
      ))}

      <PaybyCardWrapper>
        <InnerWidth>
          <StlyledAddCircleIcon />
          <span> Pay by Card </span>
        </InnerWidth>
      </PaybyCardWrapper>
    </PaymentOptionsWrapper>
  )
}

export default PaymentOptions
