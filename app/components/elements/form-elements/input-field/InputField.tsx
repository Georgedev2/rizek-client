import styled from 'styled-components'

export const InputField = styled.input`
  border: none;
  border-bottom: 1px solid #d3d3d3;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  background: none;
  width: 100%;
  height: 1.8rem;
  transition: border-bottom all 200ms;
  padding: 8px 0px 16px 0;
  font-size: 1rem;
  line-height: 20px;
  color: #292931;
  &:focus {
    border-bottom: 1px solid #292931;
  }
`
