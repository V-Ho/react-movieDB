import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import Movies from '../components/Movies'

const Div = styled.div`
  /* width: 100%; */
  display: flex;
`

class Main extends React.Component {
  render () {
    return (
      <Div>
        <Navigation />
        <Movies />
      </Div>
    )
  }
}

export default Main
