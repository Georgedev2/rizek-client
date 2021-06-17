import React from 'react'
import styled from 'styled-components'
import HeadingWithBottomLine from '../../../elements/heading-with-bottom-line/HeadingWithBottomLine'
import CloseButton from '../../../elements/buttons/close-button/CloseButton'

/* ---- COMPONENT FROM MATERIAL-UL------- */
import Button from '@material-ui/core/Button'

const Container = styled.section`
  max-width: 618px;
  background-color: #fff;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
    }
  }
`

/* ------- MODAL CLOSE BUTTON------ */
const CloseBtnContainer = styled.section`
  text-align: right;
  font-size: 20px;
  padding: 20px 20px 0 20px;
`

const HeadingWrapper = styled.div`
  width: 77%;
  padding: 0 48px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
      padding: 0 16px;
    }
  }
`

const StyledH5 = styled.h5`
  color: #a9a9ad;
  font-weight: 300;
  margin: 0;
  padding: 0 48px;
  font-size: 12px;
  margin-bottom: 0 0 4px 0;
  font-weight: 300;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      padding: 0 16px;
    }
  }
`

const StyledH4 = styled.h4`
  font-weight: 700;
  margin: 18px 0 27px 0;
  padding: 0 48px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      display: none;
      padding: 0 16px;
    }
  }
`

const StyledP = styled.p`
  color: #292931;
  padding: 0 48px;
  margin: 5px 0;
  line-height: 20px;
  letter-spacing: 0px;
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: 400;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 14px;
      font-weight: 400;
      padding: 0 16px;
    }
  }
`

/* -----ADD TO BASKET BUTTON------ */
const BtnWrapper = styled.section`
  text-align: center;
  border-top: 1px solid #ededed;
  padding: 32px 129px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      padding: 32px 0px;
    }
  }
`
const AddToBasketBtn = styled(Button)`
  background: #e1f4fa;
  font-weight: 600;
  height: 62px;

  color: ${(props) => props.theme.palette.primary.main};
  font-size: 16px;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 70%;
    }
  }
`

const AddToBasketBtnIcon = styled.div`
  background-image: url('/images/icons/other-icons/add-to-card-plus-sign.svg');
  background-size: cover;
  width: 15px;
  height: 15px;
  margin: 0px 0px 0 5px;
`
function ProductModalContent() {
  return (
    <Container>
      <CloseBtnContainer>
        <CloseButton />
      </CloseBtnContainer>

      <StyledH5>Product info</StyledH5>

      <HeadingWrapper>
        <HeadingWithBottomLine label="Charmin Ultra Soft Toilet Paper, 18" LineBgColor="#f0b000" />
      </HeadingWrapper>

      <StyledH4>AED 16</StyledH4>
      <StyledP>
        Charmin Ultra Strong toilet paper is woven like a washcloth and just cleans better than the
        leading bargain brand, so you can be Charmin clean and proud of it.
        <br></br>
        <br></br>
        It’s 4X stronger* and you can use less versus the leading bargain brand. When you buy
        Charmin Ultra Strong Mega Roll toilet paper, you get a big, long-lasting roll because one
        Charmin Mega Roll equals 4 Regular Rolls**. We all go to the bathroom, those who go with
        Charmin Ultra Strong Mega Roll toilet paper really Enjoy the Go! (*when wet vs. the leading
        bargain brand; **Based on number of sheets in Charmin Regular Roll bath tissue)
      </StyledP>

      <BtnWrapper>
        {/* ------PRODUCT MODAL CONTENT ADD TO CART BUTTON------ */}
        <AddToBasketBtn fullWidth startIcon={<AddToBasketBtnIcon />}>
          Add to Basket
        </AddToBasketBtn>
      </BtnWrapper>
    </Container>
  )
}

export default ProductModalContent
