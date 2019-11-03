import React from 'react';
import './Thumbnail.css';
import pic from '../icons/macBook.png'
import yellowStar from '../icons/starcopy.svg'
import greyStar from '../icons/starcopy2.svg'

const Thumbnail = () => {
  return (
    <div className="thumbnail">
      <img className="pic" src={pic}></img>
      <div className="line"></div>
      <p className="title">Apple Macbook Pro</p>
      <div className="ratings">
        <img src={yellowStar}></img>
        <img src={yellowStar}></img>
        <img src={yellowStar}></img>
        <img src={yellowStar}></img>
        <img src={greyStar}></img>
      </div>
      <p className="new-cost">$499 <span className="old-cost">$599</span></p>
    </div>
  )
}

export default Thumbnail;