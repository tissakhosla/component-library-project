import React from 'react';
import './Listing.css';
import yellowStar from '../icons/starcopy.svg'
import greyStar from '../icons/starcopy2.svg'

const Product = (props) => {
  return (
    <div className='pic'>
      <div className='label'>{props.labelValue}</div>
      <div className='info'>
        <h2>{props.productName}</h2>
        <div>
          <div className='ratings'>
            <img src={yellowStar} />
            <img src={yellowStar} />
            <img src={yellowStar} />
            <img src={yellowStar} />
            <img src={greyStar} />
            <p className='number-of-reviews'>{props.numOfReviews} reviews</p>
            <a className='submit-a-review'>Submit a review</a>
          </div>
          <hr></hr>
          <p className="new-cost">${props.discount}    <span className="old-cost">  ${props.retail}</span></p>
          <p className="product-text">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, 
            gravida et mattis vulputate, tristique ut lectus. 
            Sed et lectus lorem nunc leifend laorevtr istique et congue. 
            Vivamus adipiscin vulputate g nisl ut dolor ...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product