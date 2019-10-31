import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Buttons', module)
    .add('Primary', () => <Button label="Primary" type="primary"/>)

    