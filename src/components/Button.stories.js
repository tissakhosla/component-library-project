import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import Counter from './Counter'


////NEEED TO MAKE DEFAULT TYPELESS!!
////OUTLINES NEED TO BE PASSED IN AS PROPS
// Counter is broken
storiesOf('Buttons', module)
  .add('Primary', () => <Button label="Do something" type="primary" default />)
  .add('Primary white', () => <Button label="Do something" type="primary" white />)
  .add('Primary inverse', () => <Button label="Do something" type="primary" inverse />)
  .add('Danger', () => <Button label="Do something" type="danger" default />)
  .add('Danger white', () => <Button label="Do something" type="danger" white />)
  .add('Danger inverse', () => <Button label="Do something" type="danger" inverse />)
  .add('Success', () => <Button label="Do something" type="success" default />)
  .add('Success white', () => <Button label="Do something" type="success" white />)
  .add('Success inverse', () => <Button label="Do something" type="success" inverse />)
  .add('Warning', () => <Button label="Do something" type="warning" default />)
  .add('Warning white', () => <Button label="Do something" type="warning" white />)
  .add('Warning inverse', () => <Button label="Do something" type="warning" inverse />)
  .add('Default', () => <Button label="Do something" type="default" default />)
  .add('Default white', () => <Button label="Do something" type="default" white />)
  .add('Default inverse', () => <Button label="Do something" type="default" inverse />)
  .add('Cart', () => <Button type="primary" inverse cartPlain></Button>)
  .add('Heart', () => <Button type="primary" inverse heartPlain></Button>)
  .add('Cart w Text', () => <Button label="Add To Cart" type="primary" inverse cartText></Button>)
  .add('Heart w Text', () => <Button label="Add To Favorites" type="primary" inverse heartText></Button>)

storiesOf('Counters', module)
  .add('not yet', () => <Counter max={5} min={-5} start={2} increment={1}></Counter>)


