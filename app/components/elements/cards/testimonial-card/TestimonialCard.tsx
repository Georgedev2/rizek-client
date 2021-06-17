/* ---- COMPONENT FROM STYLED-COMPONENTS------- */
import styled from 'styled-components'

/* ---- COMPONENT FROM MATERIAL-UL------- */
import Card from '@material-ui/core/Card'
import StarIcon from '@material-ui/icons/Star'

const CardContainer = styled(Card)`
  max-width: 789px;
  margin-right:24px;
  padding: 44px 64px 39px 64px;
  border-radius: 24px;

  &:hover {
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
  }
`

const Wrapper = styled.div`
  margin-bottom: 31px;
`

const CardName = styled.h3`
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
  font-weight: 700;
`
const CardDate = styled.span`
  color: #6b6b6b;
  font-size: 18px;
  font-weight: 400;
`
const CardBody = styled.div`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 42px;
`
const StyledStarIcon = styled(StarIcon)`
  color: #ffb400;
  height: 19px;
  width: 20px;
`
interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    date: string
    testimony: string
    stars: number[]
  }
}
function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <CardContainer key={testimonial.id}>
      <Wrapper>
        <CardName>{testimonial.name}</CardName>
        <CardDate>{testimonial.date}</CardDate>
      </Wrapper>
      <CardBody>{testimonial.testimony}</CardBody>
      <div>
        {testimonial.stars.map((idx) => (
          <StyledStarIcon key={idx} />
        ))}
      </div>
    </CardContainer>
  )
}

export default TestimonialCard
