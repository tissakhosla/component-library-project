import React, { Component } from 'react'
import './Checkboxes.css'
import check from '../icons/check.svg'

class Checkboxes extends Component {
  constructor(props){
    super(props)

    this.state = {
      click: this.props.click,
      classList: 'check'
    }
  }

  render() {

    return (
      <div className="checkbox"><img className='check' src={check}></img></div>
    )
  }
}

export default Checkboxes;
