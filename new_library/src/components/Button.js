import React from 'react';
import './Button.css'
// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
  let classList = ''
  let types = ['primary', 'danger', 'success', 'warning', 'default']
  if (types.includes(props.type)){
    classList += ` button-${props.type}`
  }
  if (props.white) {
    classList += ` button-${props.type}-white`
  }
  if (props.inverse){
    classList += ` button-${props.type}-inverse`
  }
  if (props.hover){
    classList += ` button-hover`
  }
    return (
      <button className={classList}>
        {props.label}
      </button>
    )
}

export default Button;