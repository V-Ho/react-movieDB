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
const Selection = ({ genre, onGenreChange }) => (
  <div>
    <label>Genre 1</label>
    <select value={genre} onChange={onGenreChange}>
      <option value='comedy'>Comedy</option>
      <option value='drama'>Drama</option>
      <option value='action'>Action</option>
    </select>
  </div>
)

export default Selection
