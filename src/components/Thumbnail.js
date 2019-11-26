import React from 'react';
import './Thumbnail.css';
import yellowStar from '../icons/starcopy.svg'
import greyStar from '../icons/starcopy2.svg'

const Thumbnail = (props) => {

  let thumbClass = `thumbnail-${props.shade}-${props.orientation}`
  let picClass = `pic-${props.shade}`
  let ratingsClass = `ratings-${props.orientation}`
  let infoClass = `info-${props.orientation}`
  let lineClass = `line-${props.orientation}`
  let cartColorClass, heartColorClass
  
  if (props.shade === 'dark') {
    cartColorClass = "blue-cart"
    heartColorClass = "blue-heart"
  } else {
    cartColorClass = "grey-cart"
    heartColorClass = "grey-heart"
  }



  return (
    <div className={thumbClass}>
      <div className={picClass}>
        <div className="buttons"><button className={cartColorClass}></button><button className={heartColorClass}></button></div>
      </div>
      <div className={lineClass}></div>
      <div className={infoClass}>
        <p className="title">{props.product}</p>
        <div className={ratingsClass}>
          <img src={yellowStar} />
          <img src={yellowStar} />
          <img src={yellowStar} />
          <img src={yellowStar} />
          <img src={greyStar} />
        </div>
        <p className="new-cost">${props.discount}    <span className="old-cost">  ${props.retail}</span></p>
      </div>
    </div>
  )
}

export default Thumbnail;