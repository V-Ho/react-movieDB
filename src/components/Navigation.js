import React from 'react'
import styled from 'styled-components'
import Selection from './Selection'

const NavSection = styled.section`
  flex-basis: 20%;
  /* height: 200px; */
  min-width: 300px;
  padding: 20px;
  background-color: #F2D1D8;
`

class Navigation extends React.Component {
  render () {
    return (
      <div>
        <NavSection>
          Navigation
        </NavSection>
        <Selection />
      </div>
    )
  }
}

export default Navigation
