import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import Movies from '../components/Movies'

const Div = styled.div`
  /* width: 100%; */
  display: flex;
  background-color: gray;
  flex-direction: row;
`
const NavSection = styled.div`
  flex-basis: 20%;
  /* height: 200px; */
  min-width: 300px;
  padding: 20px;
  background-color: tomato;
`
const MovieSection = styled.div`
  flex-basis: 80%;
  /* height: 200px; */
  padding: 20px 0;
  margin: 0;
  background-color: papayawhip;
  display: flex;
  flex-wrap: wrap;

`

class Main extends React.Component {
  render () {
    return (
      <Div>
        <NavSection>
          <Navigation />
        </NavSection>
        <MovieSection>
          <Movies />
        </MovieSection>
      </Div>
    )
  }
}

export default Main
