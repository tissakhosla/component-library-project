import React from 'react'
import './Select.css'

const Select = (props) => {
  let classList = ''
  let sizes = ['default', 'ml', 'l']
  let fill = ''

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
        <option value="1">{props.value}</option>
        <option value="3">{props.value}</option>
      </select>
    </form>
  )
}

export default Select;