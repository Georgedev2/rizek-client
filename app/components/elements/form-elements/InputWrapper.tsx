import styled from 'styled-components'


export const FormInputWrapper = styled.div`
  margin-bottom: 36px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      width: 100%;
      margin-bottom: 24px;
    }
  }
`
export default FormInputWrapper 