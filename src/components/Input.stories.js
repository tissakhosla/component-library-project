import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import InputWithSubmit from './InputWithSubmit'
import Checkboxes from './Checkboxes'

storiesOf('Text Fields', module)
  .add("Input default", () => <Input size="default" value="Email"></Input>)
  .add("Input ml", () => <Input size='ml' value="Email"></Input>)
  .add("Input l", () => <Input size='l' value="Email"></Input>)

  .add("Input with Button", () => 
    <InputWithSubmit value="GET IT" placeholder="whatever you want"></InputWithSubmit>)
  
storiesOf('Check Boxes', module)
  .add("Blue Check Box", () => <Checkboxes blue/>)
  .add("Black Check Box", () => <Checkboxes black/>)


