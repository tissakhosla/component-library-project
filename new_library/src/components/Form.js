import React, { Component } from 'react';
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


// class Form extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       classList: '',
//       types: ['ml', 'l']
//     }
//   }

//   render() {
//     if (this.state.types.includes(props.type)) {
//       this.state.classList += ` form-${props.type}`

//       return (
//         <form className={this.classList}>Email<input type="text" placeholder="Semail"></input></form>
//       )
//     }
//   }
// }

// export default Form;