import React from 'react';
import './Thumbnail.css';
import pic from '../icons/macbook.jpg'
import yellowStar from '../icons/starcopy.svg'
import greyStar from '../icons/starcopy2.svg'

const Thumbnail = (props) => {
  return (
    <div className="thumbnail">
      <div className="pic">
      <div className="buttons"><button className="grey-cart"></button><button className="grey-heart"></button></div>
      </div>
      <div className="line"></div>
      <p className="title">{props.product}</p>
      <div className="ratings">
        <img src={yellowStar} />
        <img src={yellowStar} />
        <img src={yellowStar} />
        <img src={yellowStar} />
        <img src={greyStar} />
      </div>
      <p className="new-cost">${props.discount}    <span className="old-cost">  ${props.retail}</span></p>
    </div>
  )
}

export default Thumbnail;