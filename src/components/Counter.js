import React from 'react'
import Plus from './Plus-icon'
import Minus from './Minus-icon'

import './Counter.css'

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
    <div onClick={decrease}><Minus /></div>
    <div>{current}</div>
    <div onClick={increase}><Plus /></div>
    </div>
  )
}

export default Counter;