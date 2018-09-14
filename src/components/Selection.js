import React from 'react'
import styled from 'styled-components'

// const NavSelection = styled.select`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 60px;
// `
// const StyledLabel = styled.label`
//   margin-bottom: 10px;
//   color: #555;
// `
const Selection = ({ genres, genre, onGenreChange }) => (
  <div>
    <label>Genre</label>
    <select value={genre} onChange={onGenreChange}>
      {genres.map(genre => (
        <option key={genre.id} value={genre.name}>{genre.name}</option>
      ))}
      <option value='comedy'>Comedy</option>
      <option value='drama'>Drama</option>
      <option value='action'>Action</option>
    </select>
  </div>
)

export default Selection
