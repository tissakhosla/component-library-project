import React from 'react';
import './Tag.css'


const Tag = (props) => {
  let tagClass=`tag-${props.color}`
  return (
    <span className={tagClass}>{props.label}</span>
  )
}
export default Tag;