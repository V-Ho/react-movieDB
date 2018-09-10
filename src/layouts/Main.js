import React from 'react'
import Navigation from '../components/Navigation'
import Movies from '../components/Movies'

class Main extends React.Component {
  render () {
    return (
      <section className='main'>
        <Navigation />
        <Movies />
      </section>
    )
  }
}

export default Main
