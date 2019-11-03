import React from 'react';
import './Button.css'
import Cart from './Cart-icon'
import Heart from './Heart-icon'

//1. OUTLINE NEEDS TO BE A PROP
//2. Simple Cart and Heart needs to be a square
//3. Heart and Favorites need styling, and class adjustment... can only happen
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

  if (props.large) {
    classList += ` large`
  }

  if (props.cartPlain) {
    return (
      <button className={classList}>
        <Cart></Cart>
      </button>
    )
  }
  if (props.heartPlain) {
    return (
      <button className={classList}>
        <Heart></Heart>
      </button>
    )
  }

  if (props.cartText) {
    return (
      <div>
        <button className={classList}><Cart></Cart>{props.label}</button>
      </div>
    )
  }

  if (props.heartText) {
    return (
      <div>
        <button className={classList}><Heart></Heart>{props.label}</button>
      </div>
    )
  }


  return (
    <button className={classList}>
      {props.label}
    </button>
  )
}

export default Button;