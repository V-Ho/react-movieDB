import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import Movies from '../components/Movies'

const API_KEY = process.env.REACT_APP_movie_api_key

const MainDiv = styled.div`
  /* width: 100%; */
  display: flex;
`

class Main extends React.Component {

  state = {
    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    genre: 'Comedy',
    genres: [], // initialise state with empty array
    year: {
      label: 'year',
      min: 1990,
      max: 2018,
      step: 1,
      value: { min: 2000, max: 2018 }
    },
    rating: {
      label: 'rating',
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10 }
    },
    runtime: {
      label: 'runtime',
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 120 }
    }
  }

  onGenreChange = (e) => {
    this.setState({ genre: e.target.value })
  }

  setGenres = genres => {
    this.setState({ genres })
  }

  // onChange called by Slider's onChange method, recieves obj with type & data properties
  onChange = data => {
    this.setState({
      [data.type]: {
        // spread operator passes all properties of this.state to Navigation component via props
        ...this.state[data.type], // indicates which part of state should be updated
        value: data.value         // overwrite val of property
      }
    })
  }


  render () {
    return (
      <MainDiv>
        <Navigation
          onChange={this.onChange}
          onGenreChange={this.onGenreChange}
          setGenres={this.setGenres}
          {...this.state} // spread operator passes all this.state props to Navigation`
        />
        <Movies />
      </MainDiv>
    )
  }
}

export default Main
