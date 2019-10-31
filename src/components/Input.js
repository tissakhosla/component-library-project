import React from 'react';
import './Input.css'

const Input = (props) => {
  let classList = ''
  let sizes = ['default', 'ml', 'l']

  if (sizes.includes(props.size)) {
    console.log(props.size)
    classList += ` input-${props.size}`
  }
  console.log(classList)
  return (
    <form>
      {props.value}
      <input className={classList} type="text" placeholder={props.value}></input>
    </form>
  )
}

export default Input;