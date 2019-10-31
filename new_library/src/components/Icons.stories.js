import React from 'react';
import { storiesOf } from '@storybook/react';
import Heart from './Heart-icon'
import Cart from './Cart-icon'
import Plus from './Plus-icon'
import Minus from './Minus-icon'

storiesOf('Icons', module)
  .add('Heart Icon', () => <Heart></Heart>)
  .add('Cart Icon', () => <Cart></Cart>)
  .add('Plus Icon', () => <Plus></Plus>)
  .add('Minus Icon', () => <Minus></Minus>)

  