import React, { Component } from 'react'
import './Checkboxes.css'
import check from '../icons/check.svg'
import checkbox from '../icons/checkbox.svg'

const Checkboxes = (props) => {
  let handleClick = (eo) => {
    eo.preventDefault()
    
  }
  return (
    <div onClick={handleClick} className="checkbox"><img src={check} /></div>
  )
}

export default Checkboxes;
