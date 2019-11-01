import React from 'react';
import './Button.css'
import Cart from './Cart-icon'
import Heart from './Heart-icon'

//OUTLINE NEEDS TO BE A PROP
//Simple Cart and Heart needs to be a square
// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
  let classList = ''
  let types = ['primary', 'danger', 'success', 'warning']

  if (types.includes(props.type)) {
    classList += ` button-${props.type}`
  }
  if (props.default) {
    classList += ` button-${props.type}-default`
  }
  if (props.white) {
    classList += ` button-${props.type}-white`
  }
  if (props.inverse) {
    classList += ` button-${props.type}-inverse`
  }
  if (props.cart) {
    return (
      <button className={classList}>
        <Cart></Cart>
      </button>
    )
  }
  if (props.heart) {
    return (
      <button className={classList}>
        <Heart></Heart>
      </button>
    )
  }

  return (
    <button className={classList}>
      {props.label}
    </button>
  )
}

export default Button;