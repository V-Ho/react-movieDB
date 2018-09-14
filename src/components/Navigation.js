import React from 'react'
import styled from 'styled-components'
import Selection from './Selection'
import Slider from './Slider'

const API_KEY = process.env.REACT_APP_movie_api_key

const NavSection = styled.section`
  flex-basis: 20%;
  /* height: 200px; */
  min-width: 300px;
  padding: 40px;
  background-color: #EBD1F2;
`

const StyledSlider = styled.section`
  background-color: white;
  padding: 20px;
`

class Navigation extends React.Component {

  state = {
    genre: 'Comedy',
    genres: [], // initialise state with empty array
    year: {
      label: 'year',
      min: 1990,
      max: 2018,
      step: 1,
      value: { min: 2000, max: 2018}
    },
    rating: {
      label: 'rating',
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10}
    },
    runtime: {
      label: 'runtime',
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 120 }
    }
  }

  componentDidMount() {
    const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

    fetch(genresURL)
      .then(res => res.json())
      .then(data => this.setState({genres: data.genres})) // store genres in state, pass to Selection component
      .catch(err => console.log(err))
  }

  onGenreChange = (e) => {
    this.setState({ genre: e.EventTarget.value})
  }

  // onChange called by Slider's onChange method, recievs ob with type & data properties
  onChange = data => {
    this.setState({
      [data.type]: {
        ...this.state[data.type], // indicates which part of state should be updated
        value: data.value         // overwrite val of property
      }
    })
  }

  // onProductionYearChange = (e) => {
  //   this.setState({
  //     productionYear: {}
  //   })
  // }

  render () {
    return (
      <div>
        <NavSection>
          <Selection
            genres={this.state.genres}
            genre={this.state.genre}
            onGenreChange={this.onGenreChange}
          />
          <StyledSlider>
            <Slider data={this.state.year} onChange={this.onChange} />
            <Slider data={this.state.rating} onChange={this.onChange} />
            <Slider data={this.state.runtime} onChange={this.onChange} />
          </StyledSlider>
        </NavSection>
      </div>
    )
  }
}

export default Navigation
