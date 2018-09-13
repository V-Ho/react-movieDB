import React from 'react'
import styled from 'styled-components'

const MovieItem = styled.li`
  flex-basis: 22%; /* display max 4 movies per line */
  box-sizing: border-box;
  margin: 1.5%;
  display: flex;
  flex-direction: column;
  list-style: none;
  border: 1px solid #eee;
	box-shadow: 0 10px 28px -7px rgba(0,0,0,0.1);
}
`

const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* stretch movie description to fill vertical space */
  justify-content: space-between;
  padding: 10px;
  background-color: #F8F9F9;
`

const MovieTitle = styled.h2`
  color: #555;
  font-weight: bold;
  margin-bottom: 20px;
`

const Img = styled.img`
  width: 100%; /* size image to fit MovieItem */
`

const MovieDetails = styled.div`
  display: flex;
  justify-content: space-between;
`

const MovieYear = styled.div`
  display: flex;
  flex-direction: column;
`

const MovieHeader = styled(MovieDetails)`
  color: #aaa;
  margin-bottom: 5px;
  font-size: 0.65rem;
  font-weight: normal;
`

const MovieYearDate = styled(MovieDetails)`
  color: #555;
  font-size: 0.8rem;
  font-weight: bold;
`

const MovieRating = styled(MovieYear)`
  align-items: flex-end;
`

const MovieListItem = ({ movie }) => {
  const { title, poster_path, release_date, vote_average } = movie
  const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`
  const getYear = release_date.substring(0, 4)

  return (
    <MovieItem>
      <Img src={imgUrl} alt={title} />
      <MovieDescription>
        <MovieTitle>{title}</MovieTitle>
        <MovieDetails>
          <MovieYear>
            <MovieHeader>Year</MovieHeader>
            <MovieYearDate>{getYear}</MovieYearDate>
          </MovieYear>
          <MovieRating>
            <MovieHeader>Rating</MovieHeader>
            <MovieYearDate>{vote_average}</MovieYearDate>
          </MovieRating>
        </MovieDetails>
      </MovieDescription>
    </MovieItem>
  )
}

export default MovieListItem
