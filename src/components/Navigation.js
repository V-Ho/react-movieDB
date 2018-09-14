import React from 'react'
import styled from 'styled-components'
import Selection from './Selection'
import Slider from './Slider'

const NavSection = styled.section`
  flex-basis: 20%;
  /* height: 200px; */
  min-width: 300px;
  padding: 40px;
  background-color: #EBD1F2;
`

const StyledSlider = styled.section`
  background-color: white;
  padding: 20px;
`

class Navigation extends React.Component {
  componentDidMount () {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => this.props.setGenres(data.genres)) // when api data recieved, call setGenres & pass in data.genres as arg
      .catch(err => console.log(err))
  }

  render () {
    const { genre, genres, onGenreChange, onChange, year, rating, runtime } = this.props // Navigation recieves both methods and properties via props
    return (
      <div>
        <NavSection>
          <Selection
            genres={genres}
            genre={genre}
            onGenreChange={onGenreChange}
          />
          <StyledSlider>
            <Slider data={year} onChange={onChange} />
            <Slider data={rating} onChange={onChange} />
            <Slider data={runtime} onChange={onChange} />
          </StyledSlider>
        </NavSection>
      </div>
    )
  }
}

export default Navigation
