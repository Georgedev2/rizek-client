/* ---- COMPONENT FROM styled-components------- */
import styled from 'styled-components'
import MuiButton from '@material-ui/core/Button'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'

const ServiceDetailBox = styled.section`
  width: 100%;
  margin: 47px;
`
const SubSubServiceName = styled.span`
  font-size: 0.94rem;
  font-weight: 400;
  color: #7f7a7a;
  margin: 1.69rem 0 1rem 0;
`
const Category = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
`
const Wrapper = styled.div`
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 16px 0;
  margin-bottom: 32px;
`
const SubCategoryName = styled.span`
  font-size: 20px;
  font-weight: 400;
  display: block;
`

const SubCategoryPrice = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  font-size: 20px;
  font-weight: 700;
`
const ButtonWrapper = styled.div`
  border: 1.5px solid #0aa8dd;
  border-radius: 24px;
  overflow: hidden;
  height: 41px;
  width: 137px;
  display: flex;
`
const Button = styled.button`
  background: #f2f6f8;
  width: 33.3%;
  height: 100%;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
`
const DecrementButton = styled(Button)`
  border-radius: 24px 0px 0px 24px;
`
const IncrementButton = styled(Button)`
  border-radius: 0 24px 24px 0px;
`
const CartQty = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 33.3%;
  height: 100%;
  background-color: #fff;
  color: #000;
`

const Wrapper2 = styled.div`
  margin-bottom: 1.5rem;
`

const PenIcon = styled.span`
  display: inline-block;
  background-image: url('/images/icons/other-icons/blue-pen-icon.svg');
  height: 1rem;
  width: 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 1.25rem;
`

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: 400;
`

const DragAndDrop = styled.div`
  height: 6rem;

  border-radius: 0.5rem;
  border: 1px dashed ${(props) => props.theme.palette.primary.main};
  margin: 1.69rem 0;
  display: flex;
  cursor: pointer;
`
const OptionText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`
const Wrapper3 = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
`
const Icon = styled.span`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
`
const StyledGetAppIcon = styled.span`
  margin-right: 1.25rem;
  background-image: url('/images/icons/other-icons/upload-icon.svg');
  width: 1.5rem;
  height: 1.5rem;
`
const Text = styled.span`
  color: ${(props) => props.theme.palette.primary.main};
  font-family: Open Sans;
  font-size: 1.125rem;
  font-weight: 400;
  text-decoration: underline;
`

const InforIcon = styled(Icon)`
  background-image: url('/images/icons/other-icons/blue_information_icon.svg');
  height: 20.2px;
  width: 20.2px;
  margin-left: 1.125rem;
`

const ProceedButton = styled(MuiButton)`
  height: 56px;
  width: 160px;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`

const ProceedBtnBox = styled.div`
  text-align: right;
`
function ServiceDetail() {
  const [subService] = useState([
    {
      subServiceName: 'Classic Pedicure',
      price: 90.0,
    },
    {
      subServiceName: 'Gel Pedicure',
      price: 140.0,
    },
  ])

  const [options] = useState([
    'How many Heroes do you need?',
    'How many hours of cleaning do you need?',
  ])
  return (
    <ServiceDetailBox>
      <div>
        <SubSubServiceName>Beauty and Wellness / Nails</SubSubServiceName>
        <Category>Pedicure</Category>
      </div>
      {subService.map((item) => (
        <Wrapper>
          <div style={{ marginLeft: '10px' }}>
            <SubCategoryName>{item.subServiceName}</SubCategoryName>
            <SubCategoryPrice>AED {item.price}</SubCategoryPrice>
          </div>

          <ButtonWrapper>
            <DecrementButton>-</DecrementButton>
            <CartQty>
              <span>6</span>
            </CartQty>
            <IncrementButton>+</IncrementButton>
          </ButtonWrapper>
        </Wrapper>
      ))}

      {/* ------SERVICE WITH OPTIONS------- */}
      <div>
        {options.map((itm, idx) => (
          <Wrapper key={idx}>
            <OptionText> {itm}</OptionText>
            <ButtonWrapper>
              <DecrementButton>-</DecrementButton>
              <CartQty>
                <span>6</span>
              </CartQty>
              <IncrementButton>+</IncrementButton>
            </ButtonWrapper>
          </Wrapper>
        ))}
      </div>

      <Wrapper2>
        <PenIcon />
        <StyledSpan>Please add any instructions you would like your Hero to know</StyledSpan>
      </Wrapper2>

      <TextField style={{height:"109px"}} multiline fullWidth defaultValue="80" variant="outlined" />

      <DragAndDrop>
        <Wrapper3>
          <StyledGetAppIcon />
          <Text> Drag and drop necessary document</Text>
          <InforIcon />
        </Wrapper3>
      </DragAndDrop>

      <ProceedBtnBox>
        <ProceedButton>Proceed</ProceedButton>
      </ProceedBtnBox>
    </ServiceDetailBox>
  )
}

export default ServiceDetail
