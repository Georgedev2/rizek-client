import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import CloseButton from '../../../elements/buttons/close-button/CloseButton'

const Container = styled.section`
  max-width: 498px;
  padding: 24px;
  background-color: #fff;
  margin: 20px 0; //should removed when the modal is fully implemented

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
      padding: 32px 16px;
      border-radius: 18px 18px 0 0;
    }
  }
`

/* ------- MODAL CLOSE BUTTON------ */
const CloseBtnContainer = styled.section`
  text-align: right;
  font-size: 20px;
`
const CloseBtn = styled.span`
  cursor: pointer;
  font-weight: 900;

  &:hover {
    color: #d85757;
  }
`
const Imagewrapper = styled.div`
  text-align: center;
`
const ModalImage = styled.span`
  display: inline-block;
  background-image: url('/images/icons/other-icons/failed-icon.svg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 90px;
  height: 90px;
  margin-bottom: 24px;
`
const StyledH1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 24px;
    }
  }
`
const StyledParagraph = styled.p`
  font-size: 18px;
  color: #6b6b6b;
  text-align: center;
  margin: 24px 0px;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 16px;
      margin-bottom: 172px;
    }
  }
`

const Btn = styled(Button)`
  width: 100%;
  padding: 10px 0;
  font-weight: 700;
  height: 62px;
  font-size: 16px;
`

function FailedPaymentModal() {
  return (
    <Container>
      <CloseBtnContainer>
        {/* ------PRODUCT MODAL CONTENT CLOSE BUTTON------ */}
        <CloseButton />
      </CloseBtnContainer>
      <Imagewrapper>
        <ModalImage />
      </Imagewrapper>

      <StyledH1>Failed Payment</StyledH1>
      <StyledParagraph>Sorry, the transaction could not be completed. </StyledParagraph>
      <Btn>Try another method</Btn>
    </Container>
  )
}

export default FailedPaymentModal
