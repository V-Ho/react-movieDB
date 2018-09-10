import React from 'react'
import MovieListItem from './MovieListItem'

const titles = ['Beauty & the Beast', 'Nemo', 'Wall-E']
const API_KEY = process.env.REACT_APP_movie_api_key

class Movies extends React.Component {
  componentDidMount () {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

    fetch(apiURL)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  render () {
    return (
      <ul className='movies'>
        {
          titles.map((title, index) =>
            <MovieListItem key={index.toString()} title={title} />
          )
        }
      </ul>
    )
  }
}

export default Movies
