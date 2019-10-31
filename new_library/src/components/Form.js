import React from 'react';
import './Form.css'

const Form = (props) => {
  let classList = ''
  let sizes = ['default', 'ml', 'l']

  if (sizes.includes(props.size)) {
    console.log(props.size)
    classList += ` form-${props.size}`
  }
  console.log(classList)
  return (
    <form>
      {props.value}
      <input className={classList} type="text" placeholder={props.value}></input>
    </form>
  )
}

export default Form;