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
  constructor(props) {
    super(props)
    this.state = {
      url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
      moviesUrl: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
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

  // Search button generates new url that combines year, rating, runtime ranges & genre
  generateUrl = () => {
    const {genres, year, rating, runtime} = this.state
    const selectedGenre = genres.find(genre => genre.name === this.state.genre)
    const genreId = selectedGenre.id

    const moviesUrl = `https://api.themoviedb.org/3/discover/movie?`+
      `api_key=${API_KEY}&` +
      `language=en-US&sort_by=popularity.desc&`+
      `with_genres=${ genreId }&` +
      `primary_release_date.gte=${ year.value.min }-01-01&` +
      `primary_release_date.lte=${ year.value.max }-12-31&` +
      `vote_average.gte=${ rating.value.min }&` +
      `vote_average.lte=${ rating.value.max }&` +
      `with_runtime.gte=${ runtime.value.min }&` +
      `with_runtime.lte=${ runtime.value.max }&` +
      `page=1&`;

      this.setState({ moviesUrl})
  }

  onSearchBtnClick = () => {
    this.generateUrl()
  }


  render () {
    return (
      <MainDiv>
        <Navigation
          onChange={this.onChange}
          onGenreChange={this.onGenreChange}
          setGenres={this.setGenres}
          onSearchBtnClick={this.onSearchBtnClick} // Search button generates new url that combines year, rating, runtime ranges & genre
          {...this.state} // spread operator passes all this.state props to Navigation`
        />
        <Movies url={this.state.moviesUrl}/>
      </MainDiv>
    )
  }
}

export default Main
