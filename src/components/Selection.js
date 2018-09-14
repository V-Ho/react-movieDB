import React from 'react'
import styled from 'styled-components'

const StyledSelection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`
const StyledLabel = styled.label`
  margin-bottom: 10px;
  color: #555;
`

const Selection = ({ genres, genre, onGenreChange }) => (
  <StyledSelection>
    <StyledLabel>Genre</StyledLabel>
    <select value={genre} onChange={onGenreChange}>
      {genres.map(genre => (
        <option key={genre.id} value={genre.name}>{genre.name}</option>
      ))}
    </select>
  </StyledSelection>
)

export default Selection
