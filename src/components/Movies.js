import React from 'react'
import MovieListItem from './MovieListItem'

const titles = ['Beauty & the Beast', 'Nemo', 'Wall-E']

class Movies extends React.Component {
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
