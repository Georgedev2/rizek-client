import styled from 'styled-components'

const Wrapper = styled.section`
  background: #e1f4fa;
  border-radius: 0.5rem;
  padding: 1rem;
  max-width: 21.875rem;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      padding: 1rem 1.5rem;
    }
  }
`

const Heading = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #292931;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 12px;
    }
  }
`
const Paragraph = styled.p`
  color: #7f7a7a;
  font-size: 12px;
`

function CancellationTerms() {
  return (
    <Wrapper>
      <Heading>Cancellation terms and conditions</Heading>
      <Paragraph>
        Rescheduling or cancelling your booking can only be done 24 hours prior to the scheduled
        time of the service
      </Paragraph>
    </Wrapper>
  )
}

export default CancellationTerms
