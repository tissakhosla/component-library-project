import React from 'react';
import { storiesOf } from '@storybook/react';
import Heart from './Heart'
import Cart from './Cart'

storiesOf('Icons', module)
  .add('Heart Icon', () => <Heart></Heart>)
  .add('Cart Icon', () => <Cart></Cart>)