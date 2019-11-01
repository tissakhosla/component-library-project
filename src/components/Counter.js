import React, { Component } from 'react'
import Plus from './Plus-icon'
import Minus from './Minus-icon'

import './Counter.css'
// needs styling
// Needs min and max to work

class Counter extends Component {
  constructor(props){
    super(props)

    this.state = {
      max: this.props.max,
      min: this.props.min,
      increment: this.props.increment,
      current: this.props.start
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }
  
  
  increase = (eo) => {
    eo.preventDefault();
    this.setState({current: this.state.current + this.state.increment})
  }

  decrease = (eo) => {
    eo.preventDefault();
    this.setState({current: this.state.current - this.state.increment});
  }

  render () {
    return (
    <div>
    <div className="block a" onClick={this.decrease}><Minus /></div>
    <div className="block b">{this.state.current}</div>
    <div className="block c" onClick={this.increase}><Plus /></div>
    </div>
    )
  }
}
export default Counter;