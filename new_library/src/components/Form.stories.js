import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Text Fields', module)
  .add("Form default", () => <Form size="default" value="Email"></Form>)
  .add("Form ml", () => <Form size='ml' value="Email"></Form>)
  .add("Form l", () => <Form size='l' value="Email"></Form>)
