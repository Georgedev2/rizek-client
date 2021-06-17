import styled from 'styled-components'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

const ServiceDestination = styled.section`
  display: flex;
  align-items: center;
  margin: 2.3rem 0;
`

const LocationIcon = styled(LocationOnIcon)`
  color: ${(props) => props.theme.palette.primary.main};
  margin-right: 1.27rem;
`

const Wrapper = styled.section`
  width: 100%;
  padding: 3rem;
`

const AddLocationWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 3rem;
`
const StlyledAddCircleIcon = styled(AddCircleIcon)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.palette.primary.main};
  margin-right: 0.63rem;
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`

const ProceedBtn = styled(Button)`

  background: #e7e7e7;
  padding: 10px 40px;
  &:hover {
    box-shadow: 0 0 5px #b6b6b9;
    background-color: #7f7f83;
  }
  &:active {
    transform: translateY(-2px);
  }
`

const BtnWrapper = styled.section`
  text-align: right;
`
function Location() {
  const [isLocationAdded] = useState(['kjdj'])
  return (
    <Wrapper>
      <ServiceDestination>
        <LocationIcon color="primary" />
        <span>Where would you like your service?</span>
      </ServiceDestination>

      <AddLocationWrapper>
        <span style={{ color: '#7F7F83' }}>No location chosen yet!</span>
        <StyledDiv>
          <StlyledAddCircleIcon /> <span>Add location</span>
        </StyledDiv>
      </AddLocationWrapper>

      <BtnWrapper>
        <ProceedBtn disabled={true}>Proceed</ProceedBtn>
      </BtnWrapper>
    </Wrapper>
  )
}
//addedLocations={isLocationAdded}
  //background: ${(props) => (props.addedLocations ? '#e7e7e7' : props.theme.palette.primary.main)};
export default Location
