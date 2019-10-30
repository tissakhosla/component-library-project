import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Buttons', module)
    .add('Primary', () => <Button label="Primary" type="primary"/>)
    .add('Large Primary', () => <Button label="Large" type="primary" large/>)
    .add('Danger', () => <Button label="Danger!" type="danger"/>)
    .add('Large Danger', () => <Button label="Large Danger" type="danger" large />)
    .add('Success', () => <Button label="Success" type="success"/>)
    .add('Outline Success', () => <Button label="Success" type="success" outline />)
    .add('Warning', () => <Button label="Warning" type="warning" />)
    .add('Warning Hover', () => <Button label="Warning" type="warning" hover/>)
    