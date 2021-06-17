import InputBase from '@material-ui/core/InputBase'
import MuiSearchIcon from '@material-ui/icons/Search'

/* ---- COMPONENT FROM REACT & STYLED COMPONENTS------- */
import styled from 'styled-components'

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
  height: 2.5rem;
  overflow: hidden;
  width: 100%;
  & > button {
    width: 63px;
    border-radius: 1px;
    background: #e1f4fa;
    height: 40px;
    display: flex;
    cursor: pointer;
    border: none;
    outline: none;
  }
`

const StyledInputBase = styled(InputBase)`
  width: 95%;
  padding: 5px 3px 5px 1rem;
`

const SearchIcon = styled(MuiSearchIcon)`
  margin: auto;
  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
`

interface SearchBarProp {
  placeholder: string
}

function SearchBar({ placeholder, ...rest }: SearchBarProp) {
  return (
    <SearchBox>
      <StyledInputBase placeholder={placeholder} />
      <button {...rest}>
        <SearchIcon />
      </button>
    </SearchBox>
  )
}

export default SearchBar
