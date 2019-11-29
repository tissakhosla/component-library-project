import React from 'react';
import './Listing.css';
import yellowStar from '../icons/starcopy.svg';
import greyStar from '../icons/starcopy2.svg';
import Tag from './Tag';
import Button from './Button'


const Product = (props) => {
  return (
    <div className='listing'>
      <div className='pic'><Tag label="HOT" color={'red'} /></div>
      <div className='info'>
        <p className='heading'>{props.productName}</p>
        <div>
          <div className='ratings'>
            <img src={yellowStar} />
            <img src={yellowStar} />
            <img src={yellowStar} />
            <img src={yellowStar} />
            <img src={greyStar} />
            <p className='number-of-reviews'>0 reviews</p>
            <p className='submit-a-review'><a>Submit a review</a></p>
          </div>
          <hr></hr>
          <p className="new-cost">${props.discount}    <span className="old-cost">  ${props.retail}</span></p>
          <p className="product-text">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
            gravida et mattis vulputate, tristique ut lectus.
            Sed et lectus lorem nunc leifend laorevtr istique et congue.
            Vivamus adipiscin vulputate g nisl ut dolor ...
          </p>
          <div className='actions'>
            <Button label="Add To Cart" type="primary" inverse cartText></Button>
            <Button type="primary" inverse heartPlain></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product