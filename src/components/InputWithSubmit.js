import React, { Component } from 'react'
import './InputWithSubmit.css'

class InputWithSubmit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value,
      placeholder: this.props.placeholder
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(eo) {
    eo.preventDefault()
    // eo.persist()
    alert(`You want ${eo.target[0].value}?!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-with-submit">
        <input className="text-field" type="text" placeholder={this.state.placeholder}></input>
        <input className="submit" value={this.state.value} type="submit"></input>
      </form>
    )
  }
}

export default InputWithSubmit;