import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import styled from 'styled-components'

const StyledSlider = styled.section`
  margin-bottom: 40px;
`

const StyledLabel = styled(StyledSlider)`
  color: #555;
  font-size: 1rem;
  margin-bottom: 20px;
  display: block;
  text-transform: capitalize;
`

class Slider extends React.Component {
  // slider recieves onChange method and data from parent
  // every time slider moves, onChange () is called
  onChange = range => {
    this.props.onChange({
      type: this.props.data.label,
      value: range
    })
  }

  render() {
    // recieve data object from props, then destructure
    const { min, max, step, value, label } = this.props.data
    return(
      <StyledSlider>
        <StyledLabel>{label}</StyledLabel>
        <InputRange
          minValue={min}
          maxValue={max}
          step={step}
          value={value}
          onChange={this.onChange}
        />
      </StyledSlider>
    )
  }
}

export default Slider