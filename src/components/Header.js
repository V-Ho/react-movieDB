import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
 background-color: #E9F2D1;
 margin: 0;
`

const Header = () => {
  return (
    <StyledHeader>
      <h1> React Movie DB </h1>
    </StyledHeader>
  )
}

export default Header
