/* ---- COMPONENT FROM REACT & STYLED COMPONENTS------- */
import styled from 'styled-components'
import { useState } from 'react'

const MAP = styled.div`
  //THIS SHOULD BE REMOVED WHEN THE MAP IS INTEGRATED
  width: 100%;
  height: 223px;
  background-image: url('/images/checkout-asset/google-map.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      height: 312px;
    }
  }
`
function Map() {
  return (
    <>
      <MAP />
    </>
  )
}

export default Map
