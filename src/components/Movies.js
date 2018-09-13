import React from 'react'
import MovieListItem from './MovieListItem'
import styled from 'styled-components'

const API_KEY = process.env.REACT_APP_movie_api_key

const MovieSection = styled.ul`
  flex-basis: 80%;
  padding: 20px 0;
  margin: 0;
  background-color: papayawhip;
  display: flex;
  flex-wrap: wrap;
`

class Movies extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: []
    }
    this.storeMovies = this.storeMovies.bind(this)
  }
  componentDidMount () {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

    fetch(apiURL)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => this.storeMovies(data))
      .catch(err => console.log(err))
  }

  // assign results of fetch movies, then map and store data in state
  storeMovies (data) {
    const movies = data.results.map(res => {
      const { vote_count, id, genre_ids, poster_path, title, vote_average, release_date } = res

      return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date }
    })

    this.setState({ movies })
  }

  render () {
    return (
      <MovieSection>
        {
          this.state.movies.map((movie) => // map over this.state.movies array, pass in movie object
            <MovieListItem key={movie.id} movie={movie} />
          )
        }
      </MovieSection>
    )
  }
}

export default Movies
