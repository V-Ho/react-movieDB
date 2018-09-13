import React from 'react'
import styled from 'styled-components'

const NavSection = styled.section`
  flex-basis: 20%;
  /* height: 200px; */
  min-width: 300px;
  padding: 20px;
  background-color: tomato;
`

class Navigation extends React.Component {
  render () {
    return (
      <NavSection>
        Navigation
      </NavSection>
    )
  }
}

export default Navigation
