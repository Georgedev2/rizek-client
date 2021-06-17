import styled from 'styled-components'
//import { FormBox, InputField, Label, FormButton } from '../../../elements/form/FormComponents'
import { InputField } from '../../../elements/form-elements/input-field/InputField'
import { Label } from '../../../elements/form-elements/label/Label'
/* ---- COMPONENT FROM MATERIAL-UL------- */
import Button from '@material-ui/core/Button'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

import HeadingWithBottomLine from '../../../elements/heading-with-bottom-line/HeadingWithBottomLine'
import { useState } from 'react'

const CreditModalCardContent = styled.section`
  width: 400px;
  padding: 20px;
  background-color: #fff;

  /* -----BREAK POINTS 600px---- */
  @media (max-width: 37rem) {
    width: 100%;
  }
`
const FormBox = styled.div`
  margin-bottom: 17px;
`
const ProceedBtn = styled(Button)`
  height: 62px;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`

const Image = styled.div`
  height: 200px;
  width: 100%;
  background-image: url('/images/checkout-asset/google-map.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto 1rem 0;
  border-radius: 10px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const BtnList = styled.section`
  margin: 35px 0;
`

const CategoryButton = styled(Button)`
  margin: 0 5px 0 0;
`
const ProceedBtnContainer = styled.div`
  text-align: center;
  border-top: 1px solid #ededed;
  padding: 20px 0;
  margin-top: 20px;
`
const StyledH3 = styled(Label)``

const CloseBtnContainer = styled.section`
  text-align: right;
  font-size: 20px;
`
const CloseBtn = styled.span`
  cursor: pointer;

  &:hover {
    color: #d85757;
  }
`
const Asterisk = styled.span`
  color: red;
`
const LeftArrow = styled(KeyboardBackspaceIcon)`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 1.8rem;
  margin-right: 1rem;
  cursor: pointer;
  transform: translateX(0);
  &:hover {
    transform: translateX(-1.5px);
  }
`
const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
  margin: 1.12rem 0 1rem 0;
  height: 2.5rem;
  overflow: hidden;
  width: 100%;
`

const StyledInputBase = styled(InputBase)`
  width: 95%;
  padding: 5px 3px 5px 1rem;
`

const SearchIconBox = styled.span`
  width: 63px;
  border-radius: 1px;
  background: #e1f4fa;
  height: 40px;
  display: flex;
  cursor: pointer;
`
const StyledSearchIcon = styled(SearchIcon)`
  margin: auto;
  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
`

function AddLocationModalContent() {
  const [category, setCategory] = useState(['Home', 'Work', 'Work'])
  return (
    <CreditModalCardContent>
      {/* ------LOCATION MODAL CONTENT CLOSE BUTTON------ */}
      <CloseBtnContainer>
        <CloseBtn>&#x2715;</CloseBtn>
      </CloseBtnContainer>

      {/* ------LOCATION MODAL CONTENT HEADING------ */}
      <div>
        <LeftArrow />
        <HeadingWithBottomLine label=" Add Address" />
      </div>

      {/* ------LOCATION MODAL CONTENT LOCATION SEARCHBAR------ */}
      <SearchInputWrapper>
        <StyledInputBase placeholder="Search location" />
        <SearchIconBox>
          {' '}
          <StyledSearchIcon />
        </SearchIconBox>
      </SearchInputWrapper>

      {/* --------LOCATION MODAL CONTENT MAP------- */}

      <Image />

      {/* -------- LOCATION MODAL CONTENT FORM------- */}
      <form>
        <FormBox>
          <Label>
            Area <Asterisk>*</Asterisk>
          </Label>
          <InputField />
        </FormBox>

        <Wrapper>
          <FormBox style={{ width: '49%' }}>
            <Label>
              Building / Villa Name <Asterisk>*</Asterisk>
            </Label>
            <InputField />
          </FormBox>
          <FormBox style={{ width: '49%' }}>
            <Label>
              Flat / Villa No. <Asterisk>*</Asterisk>
            </Label>
            <InputField />
          </FormBox>
        </Wrapper>

        <StyledH3> Address Name</StyledH3>
        <BtnList>
          {category.map((itm: string, idx: number) => (
            <CategoryButton key={idx} variant="outlined">
              {itm}
            </CategoryButton>
          ))}
        </BtnList>
        <ProceedBtnContainer>
          <ProceedBtn fullWidth> Form Button </ProceedBtn>
        </ProceedBtnContainer>
      </form>
    </CreditModalCardContent>
  )
}

export default AddLocationModalContent
