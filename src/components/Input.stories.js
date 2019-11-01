import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import InputWithSubmit from './InputWithSubmit'

storiesOf('Text Fields', module)
  .add("Input default", () => <Input size="default" value="Email"></Input>)
  .add("Input ml", () => <Input size='ml' value="Email"></Input>)
  .add("Input l", () => <Input size='l' value="Email"></Input>)
  .add("Input with Button", () => <InputWithSubmit value="GET IT" placeholder="whatever you want"></InputWithSubmit>)
