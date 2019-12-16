import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import Counter from './Counter'


////NEEED TO MAKE DEFAULT TYPELESS!!
////OUTLINES NEED TO BE PASSED IN AS PROPS
storiesOf('Buttons', module)
  .add('Primary', () => <Button label="Do something" type="primary" default />)
  .add('Primary large', () => <Button label="Do something" type="primary" default large/>)
  .add('Primary white', () => <Button label="Do something" type="primary" white />)
  .add('Primary white large', () => <Button label="Do something" type="primary" white large/>)
  .add('Primary inverse', () => <Button label="Do something" type="primary" inverse />)
  .add('Primary inverse large', () => <Button label="Do something" type="primary" inverse large/>)
  .add('Orange', () => <Button label="Do something" type="orange" default />)
  .add('Orange large', () => <Button label="Do something" type="orange" default large/>)
  .add('Orange white', () => <Button label="Do something" type="orange" white />)
  .add('Orange white large', () => <Button label="Do something" type="orange" white large/>)
  .add('Orange inverse', () => <Button label="Do something" type="orange" inverse />)
  .add('Orange inverse large', () => <Button label="Do something" type="orange" inverse large/>)
  .add('Danger', () => <Button label="Do something" type="danger" default />)
  .add('Danger large', () => <Button label="Do something" type="danger" default large/>)
  .add('Danger white', () => <Button label="Do something" type="danger" white />)
  .add('Danger white large', () => <Button label="Do something" type="danger" white large/>)
  .add('Danger inverse', () => <Button label="Do something" type="danger" inverse />)
  .add('Danger inverse large', () => <Button label="Do something" type="danger" inverse large/>)
  .add('Success', () => <Button label="Do something" type="success" default />)
  .add('Success large' , () => <Button label="Do something" type="success" default large/>)
  .add('Success white', () => <Button label="Do something" type="success" white />)
  .add('Success white large' , () => <Button label="Do something" type="success" white large/>)
  .add('Success inverse', () => <Button label="Do something" type="success" inverse />)
  .add('Success inverse large', () => <Button label="Do something" type="success" inverse large/>)
  .add('Warning', () => <Button label="Do something" type="warning" default />)
  .add('Warning large', () => <Button label="Do something" type="warning" default large/>)
  .add('Warning white', () => <Button label="Do something" type="warning" white />)
  .add('Warning white large', () => <Button label="Do something" type="warning" white large/>)
  .add('Warning inverse', () => <Button label="Do something" type="warning" inverse />)
  .add('Warning inverse large', () => <Button label="Do something" type="warning" inverse large/>)
  .add('Default', () => <Button label="Do something" type="default" default />)
  .add('Default large', () => <Button label="Do something" type="default" default large/>)
  .add('Default white', () => <Button label="Do something" type="default" white />)
  .add('Default white large', () => <Button label="Do something" type="default" white large/>)
  .add('Default inverse', () => <Button label="Do something" type="default" inverse />)
  .add('Default inverse large', () => <Button label="Do something" type="default" inverse large/>)
  .add('Cart', () => <Button type="primary" inverse cartPlain></Button>)
  .add('Heart', () => <Button type="primary" inverse heartPlain></Button>)
  .add('Cart w Text', () => <Button label="Add To Cart" type="primary" inverse cartText></Button>)
  .add('Heart w Text', () => <Button label="Add To Favorites" type="primary" inverse heartText></Button>)
  

storiesOf('Counters', module)
  .add('not yet', () => <Counter max={5} min={-5} start={2} increment={1}></Counter>)


