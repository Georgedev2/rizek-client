import React from 'react'
import styled from 'styled-components'

const CloseBtn = styled.span`
  cursor: pointer;
  font-size: 30px;
  font-weight:bold;
`
function CloseButton(Props: unknown) {
  return (
    <>
      <CloseBtn {...Props}>&#x2715;</CloseBtn>
    </>
  )
}

export default CloseButton
