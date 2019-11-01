import React from 'react'
import Plus from './Plus-icon'
import Minus from './Minus-icon'

import './Counter.css'
//y no work :,()
const Counter = (props) => {
  let current = props.start
  
  let increase = (eo) => {
    console.log(eo)
    eo.preventDefault()
    return current = current + props.increment
  }

  let decrease = (eo) => {
    console.log(eo)
    eo.preventDefault()
    return current = current - props.increment
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