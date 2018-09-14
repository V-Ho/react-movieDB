import React from 'react'
import styled from 'styled-components'

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
`

const StyledBtn = styled.button`
  padding: 10px 21px;
  margin: 10px;
  background: #C3CBCB;
  color: rgba(255,255,255, 0.75);
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s ease-out;
  outline: 0;
  border: 0;

  &:hover {
    color: white;
  }
`
const SearchButton = ({ onClick }) => (
  <StyledSearch>
    <StyledBtn onClick={onClick}>Search</StyledBtn>
  </StyledSearch>
)

export default SearchButton
