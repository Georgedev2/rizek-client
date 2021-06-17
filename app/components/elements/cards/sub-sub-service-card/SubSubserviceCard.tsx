import CardMedia from '@material-ui/core/CardMedia'
import styled from 'styled-components'

const CardContainer = styled.div`
  background: #f0f6f9;
  padding: 24px;
  max-height: 370px;
  max-width: 273px;
  margin-right: 23px;
`
const StyledCardMedia = styled(CardMedia)`
  height: 93px;
  width: 93px;
  border-radius: 50%;
  background-color: #f0f6f9;
  margin: 0 0 24px 0;
`

const StyledH4 = styled.h4`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 400;
`
const ForwardArrowBtn = styled.div`
  background-image: url('/images/service-assets/right-arrow-icon.svg');
  background-repeat: no-repeat;
  cursor: pointer;
  width: 15px;
  height: 15px;
  background-color: transparent;
  &:hover {
    background-color: transparent;
    transform: scale(1.5);
  }
`

const CardContent = styled.div`
  color: #7f7a7a;
  margin-bottom: 61px;
  & > span {
    font-size: 20px;
    font-weight: 400;
  }
`
const Price = styled.span`
  font-weight: bold;
  color: #000;
`
interface Prop {
  subSubService: { name: string; serviceCharge: string; image: string }
}
function SubSubserviceCard({ subSubService }: Prop) {
  return (
    <CardContainer>
      <StyledCardMedia image={subSubService.image} />
      <StyledH4>{subSubService.name}</StyledH4>
      <CardContent>
        <span>Service at fixed price at </span>
        <Price>AED {subSubService.serviceCharge}</Price>
      </CardContent>

      <ForwardArrowBtn />
    </CardContainer>
  )
}

export default SubSubserviceCard
