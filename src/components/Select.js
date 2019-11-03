import React from 'react'
import './Select.css'
// CHANGE SELECTION OPTIONS
const Select = (props) => {
  let classList = ''
  let sizes = ['default', 'ml', 'l']
  // let fill = ''

  if (sizes.includes(props.size)) {
    classList += ` select-${props.size}`
  }
  if(props.filled){
    classList += ` select-filled` 
  }
  return (
    <form>
      <select className={classList} placeholder={props.value}>
        <option value="0">{props.value}</option>
        <option value="1">{0.001}</option>
        <option value="2">{0.002}</option>
        <option value="3">{0.003}</option>
      </select>
    </form>
  )
}

export default Select;