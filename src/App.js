import React, { Component } from 'react'

const API_KEY = process.env.REACT_APP_movie_api_key

class App extends Component {
  render () {
    console.log('API Key:', API_KEY)
    return (
      <div className='App'>
        <h1>React Movie DB</h1>
      </div>
    )
  }
}

export default App
