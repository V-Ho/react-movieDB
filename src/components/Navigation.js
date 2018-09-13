import React from 'react'
import styled from 'styled-components'
import Selection from './Selection'
import Slider from './Slider'

const NavSection = styled.section`
  flex-basis: 20%;
  /* height: 200px; */
  min-width: 300px;
  padding: 40px;
  background-color: white;
`

class Navigation extends React.Component {

  state = {
    genre: '',
    year: {
      label: 'year',
      min: 1990,
      max: 2018,
      step: 1,
      value: { min: 2000, max: 2018}
    },
    rating: {
      label: 'rating',
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10}
    },
    runtime: {
      label: 'runtime',
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 120 }
    }
  }

  onGenreChange = (e) => {
    this.setState({ genre: e.EventTarget.value})
  }

  // onChange called by Slider's onChange method, recievs ob with type & data properties
  onChange = data => {
    this.setState({
      [data.type]: {
        ...this.state[data.type], // indicates which part of state should be updated
        value: data.value         // overwrite val of property
      }
    })
  }

  // onProductionYearChange = (e) => {
  //   this.setState({
  //     productionYear: {}
  //   })
  // }

  render () {
    return (
      <div>
        <NavSection>
          <Selection
            genre={this.state.genre}
            onGenreChange={this.onGenreChange}
          />
          <Slider data={this.state.year} onChange={this.onChange} />
          <Slider data={this.state.rating} onChange={this.onChange} />
          <Slider data={this.state.runtime} onChange={this.onChange} />
        </NavSection>
      </div>
    )
  }
}

export default Navigation
