import React from 'react'
import styled from 'styled-components'
import MuiButton from '@material-ui/core/Button'

const ButtonContainer = styled.div`
  text-align: center;
  border-top: 1px solid #ededed;
  padding: 32px 62px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      padding: 24px 16px;
    }
  }
`

const Button = styled(MuiButton)`
  height: 62px;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`
interface FormButtonProp {
  children: React.ReactNode
  rest?: unknown
}
function FormButton({ children, rest }: FormButtonProp) {
  return (
    <ButtonContainer>
      <Button fullWidth {...rest}>
        {children}
      </Button>
    </ButtonContainer>
  )
}

export default FormButton
