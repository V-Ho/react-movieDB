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
class Selection extends React.Component {
  state = {
    value: null
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <select value={this.setState.value} onChange={this.onChange}>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="action">Action</option>
      </select>

    )
  }
}

export default Selection
