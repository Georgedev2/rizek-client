import styled from 'styled-components'
import HeadingWithBottomLine from '../../../elements/heading-with-bottom-line/HeadingWithBottomLine'
import { InputField } from '../../../elements/form-elements/input-field/InputField'
import { Label } from '../../../elements/form-elements/label/Label'

import FormInputWrapper from '../../../elements/form-elements/InputWrapper'
import FormBody from '../../../elements/form-elements/form-body/FormBody'
import FormButton from '../../../elements/form-elements/form-button/FormButton'
import CloseButton from '../../../elements/buttons/close-button/CloseButton'

const CreditModalCardContent = styled.section`
  max-width: 618px;
  background-color: #fff;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
    }
  }
`

const CloseBtnContainer = styled.section`
  text-align: right;
  padding: 61px 48px 24px 48px;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      display: none;
    }
  }
`

const HeadingWrapper = styled.section`
  padding: 0px 48px 18px 48px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      padding: 32px 16px 24px 16px;
      font-size: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

const CloseBtn2 = styled(CloseButton)`
  display: none;
  cursor: pointer;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      display: block;
    }
  }
`

const ModalImage = styled.div`
  height: 262px;
  width: 428px;
  margin: 0 auto 52px auto;
  background-image: url('/images/checkout-asset/credit-card.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      height: 176px;
      width: 277px;
    }
  }
`
const CVVWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 24px 0;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      flex-direction: column;
      margin: 0;
    }
  }
`

const Wrapper2 = styled.div`
  margin-bottom: 36px;
  display: flex;
`
const RadioBtn = styled.input`
  background-color: #0000;
  cursor: pointer;
  margin-right: 0.4rem;
`
const StyledSpan = styled.span`
  font-size: 11px;
  color: #ff0000;
`

const NotificationIcon = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url('/images/icons/information-icons/red-information-icon.svg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 0.5rem;
`

const FormInputWrapperModified = styled(FormInputWrapper)`
  width: 48%;
  margin: 0;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
    }
  }
`

function PaymentmodalContent() {
  return (
    <CreditModalCardContent>
      <CloseBtnContainer>
        <CloseButton />
      </CloseBtnContainer>

      <HeadingWrapper>
        <HeadingWithBottomLine label="Add Address" LineBgColor="#f0b000" />

        <CloseBtn2>&#x2715;</CloseBtn2>
      </HeadingWrapper>

      <ModalImage />

      {/* ------CREDIT CARD MODAL CONTENT FORM------ */}
      <FormBody>
        <FormInputWrapper>
          <Label>Name</Label>
          <InputField autoFocus placeholder="Layan" />
        </FormInputWrapper>

        <FormInputWrapper>
          <Label>Card number</Label>
          <InputField placeholder="Ex: 666 999 444 888" />
        </FormInputWrapper>

        <CVVWrapper>
          <FormInputWrapperModified>
            <Label>Expiry (MM/YY)</Label>
            <InputField autoFocus placeholder="MM / YY" />
          </FormInputWrapperModified>

          <FormInputWrapperModified>
            <Label>CVV</Label>
            <InputField autoFocus placeholder="000" />
          </FormInputWrapperModified>
        </CVVWrapper>

        <Wrapper2>
          <RadioBtn type="radio" />
          <StyledSpan>Save your card securely for fast checkout in the future</StyledSpan>
          <NotificationIcon />
        </Wrapper2>
      </FormBody>

      <FormButton>Pay</FormButton>
    </CreditModalCardContent>
  )
}

export default PaymentmodalContent
