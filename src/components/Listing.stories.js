import React from 'react'
import { storiesOf } from '@storybook/react';
import Product from './Listing'

storiesOf('Listings', module)
  .add("Complete Product Listing", 
    () => <Product 
      numberOfReviews={0}
      productName="Beats Solo2 On Ear Headphones - Black"
      discount={199}
      retail={299}
      />)