import React, { Component } from 'react'
import Header from '../src/components/Header'
import Main from './layouts/Main'

const API_KEY = process.env.REACT_APP_movie_api_key

class App extends Component {
  render () {
    console.log('API Key:', API_KEY)
    return (
      <div className='App'>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App
