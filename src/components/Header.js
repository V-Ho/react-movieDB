import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
 background-color: #E9F2D1;
 margin: 0;
 display: flex;
 justify-content: center;
 align-items: center;
`

const Title = styled.h1`
  font-size: 2rem;
`

const Header = () => {
  return (
    <StyledHeader>
      <Title> React Movie DB </Title>
    </StyledHeader>
  )
}

export default Header
