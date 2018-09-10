import React from 'react'

class Counter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState({ counter: this.state.counter + 1 })
  }

  render () {
    return (
      <div>
        <h4>Button Counter</h4>
        <button onClick={this.onClick}>Click: {this.state.counter}</button>
      </div>
    )
  }
}

export default Counter
