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

  state = {
    genre: ''
  }

  onGenreChange = (e) => {
    this.setState({ genre: e.EventTarget.value})
  }
  render () {
    return (
      <div>
        <NavSection>
          <Selection
            genre={this.state.genre}
            onGenreChange={this.onGenreChange}
          />
        </NavSection>
      </div>
    )
  }
}

export default Navigation
