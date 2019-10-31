import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Buttons', module)
    .add('Primary', () => <Button label="Do something" type="primary" hover/>)
    .add('Primary white', () => <Button label="Do something" type="primary" white/>)
    .add('Primary inverse', () => <Button label="Do something" type="primary" inverse/>)
    .add('Danger', () => <Button label="Do something" type="danger" hover/>)
    .add('Danger white', () => <Button label="Do something" type="danger" white/>)
    .add('Danger inverse', () => <Button label="Do something" type="danger" inverse/>)
    .add('Success', () => <Button label="Do something" type="success" hover/>)
    .add('Success white', () => <Button label="Do something" type="success" white/>)
    .add('Success inverse', () => <Button label="Do something" type="success" inverse/>)
    .add('Warning', () => <Button label="Do something" type="warning" hover/>)
    .add('Warning white', () => <Button label="Do something" type="warning" white/>)
    .add('Warning inverse', () => <Button label="Do something" type="warning" inverse/>)
    .add('Default', () => <Button label="Do something" type="default" hover/>)
    .add('Default white', () => <Button label="Do something" type="default" white/>)
    .add('Default inverse', () => <Button label="Do something" type="default" inverse/>)
    