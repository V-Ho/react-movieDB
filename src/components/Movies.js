import React from 'react'
import MovieListItem from './MovieListItem'
import styled from 'styled-components'

const MovieSection = styled.ul`
  flex-basis: 80%;
  padding: 40px;
  margin: 0;
  background-color: #D1F2EB;
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
  // when rendering for first time, call fetchMovies & pass in url from props
  componentDidMount () {
    this.fetchMovies(this.props.url)
  }
  // when we choose different selection, access nextProps
  componentWillReceiveProps (nextProps) {
    if (this.props.url !== nextProps.url) {
      this.fetchMovies(nextProps.url)
    }
  }

  fetchMovies = (url) => {
    fetch(url)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => this.storeMovies(data))
      .catch(err => console.log(err))
  }

  // assign results of fetch movies, then map and store data in state
  storeMovies = (data) => {
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
