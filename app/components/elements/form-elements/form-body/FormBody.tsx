import styled from 'styled-components'

export const FormBody = styled.section`
  padding: 0 48px 0 48px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      padding: 0 16px 0 16px;
      width: 100%;
    }
  }
`
export default FormBody
