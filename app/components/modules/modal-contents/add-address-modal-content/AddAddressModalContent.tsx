import HeadingWithBottomLine from '../../../elements/heading-with-bottom-line/HeadingWithBottomLine'
import SearchBar from '../../../elements/search-bar/SearchBar'
import Map from '../../../elements/map/Map'
import FormInputWrapper from '../../../elements/form-elements/InputWrapper'
import CloseButton from '../../../elements/buttons/close-button/CloseButton'

import FormBody from '../../../elements/form-elements/form-body/FormBody'
import { InputField } from '../../../elements/form-elements/input-field/InputField'
import { Label } from '../../../elements/form-elements/label/Label'

/* ---- COMPONENT FROM MATERIAL-UL------- */
import Button from '@material-ui/core/Button'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

/* ---- COMPONENT FROM REACT & STYLED COMPONENTS------- */
import styled from 'styled-components'
import { useState } from 'react'

const CreditModalCardContent = styled.section`
  max-width: 618px;
  background-color: #fff;
  margin-top: 20px; //should be removed
`

const CloseBtnContainer = styled.section`
  text-align: right;
  padding: 61px 48px 24px 48px;
  //font-size: 20px;
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
const LeftArrow = styled(KeyboardBackspaceIcon)`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 28px;
  margin-right: 16px;
  cursor: pointer;
  transform: translateX(0);
  &:hover {
    transform: translateX(-1.5px);
  }

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      display: none;
    }
  }
`
const SerachBarWrapper = styled.section`
  padding: 0 48px 16px 48px;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      padding: 0px 16px 24px 16px;
    }
  }
`

const MAPWrapper = styled.section`
  padding: 0 48px 24px 48px;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      padding: 0px 16px 24px 16px;
      width: 100%;
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      flex-direction: column;
    }
  }
`

const FormInputWrapper2 = styled(FormInputWrapper)`
  width: 49%;
  margin-bottom: 24px;
`

const Asterisk = styled.span`
  color: red;
`

const AddressName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`

const BtnList = styled.section`
  margin: 32px 0;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      margin: 0 0 24px 0;
    }
  }
`

const CategoryButton = styled(Button)`
  margin: 0 8px 0 0;
  border-radius: 6px;
  height: 53px;
  width: 87px;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      margin: 0 5px 8px 0;
      height: 23px;
      width: 49px;
    }
  }
`
const ProceedBtnContainer = styled.div`
  text-align: center;
  border-top: 1px solid #ededed;
  padding: 32px 62px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      padding: 24px 16px;
    }
  }
`

const ProceedBtn = styled(Button)`
  height: 62px;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`

function AddLocationModalContent() {
  const [category, setCategory] = useState(['Home', 'Work', 'Others'])
  return (
    <CreditModalCardContent>
      <CloseBtnContainer>
        <CloseButton />
      </CloseBtnContainer>

      <HeadingWrapper>
        <div>
          <LeftArrow />
          <HeadingWithBottomLine label="Add Address" LineBgColor="#f0b000" />
        </div>
        <CloseBtn2>&#x2715;</CloseBtn2>
      </HeadingWrapper>

      {/* ------SEARCHBAR------ */}
      <SerachBarWrapper>
        <SearchBar placeholder="Search location" />
      </SerachBarWrapper>

      {/* --------MAP------- */}
      <MAPWrapper>
        {' '}
        <Map />
        {/* THIS SHOULD BE REMOVED WHEN THE MAP IS INTEGRATED */}
      </MAPWrapper>

      {/* -------- FORM------- */}
      <FormBody>
        <FormInputWrapper>
          <Label>
            Area <Asterisk>*</Asterisk>
          </Label>
          <InputField />
        </FormInputWrapper>

        <Wrapper>
          <FormInputWrapper2>
            <Label>
              Building / Villa Name <Asterisk>*</Asterisk>
            </Label>
            <InputField />
          </FormInputWrapper2>

          <FormInputWrapper2>
            <Label>
              Flat / Villa No. <Asterisk>*</Asterisk>
            </Label>
            <InputField />
          </FormInputWrapper2>
        </Wrapper>

        <AddressName> Address Name</AddressName>
        <BtnList>
          {category.map((itm: string, idx: number) => (
            <CategoryButton key={idx} variant="outlined">
              {itm}
            </CategoryButton>
          ))}
        </BtnList>
      </FormBody>

      <ProceedBtnContainer>
        <ProceedBtn fullWidth> Proceed </ProceedBtn>
      </ProceedBtnContainer>
    </CreditModalCardContent>
  )
}

export default AddLocationModalContent
