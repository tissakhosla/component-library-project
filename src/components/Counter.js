import React from 'react'
import Plus from './Plus-icon'
import Minus from './Minus-icon'

import './Counter.css'
//y no work :,()
const Counter = (props) => {
  let current = props.start
  
  let increase = (eo) => {
    
    eo.preventDefault();
    current = current + props.increment;
    return current;
  }

  let decrease = (eo) => {
    
    eo.preventDefault();
    current = current - props.increment;
    return current;
  }

  return (
    <div>
    <div className="block a" onClick={decrease}><Minus /></div>
    <div className="block b">{current}</div>
    <div className="block c" onClick={increase}><Plus /></div>
    </div>
  )
}

export default Counter;