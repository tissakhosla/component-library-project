import React from 'react'
import {storiesOf} from '@storybook/react'
import Select from './Select'


  storiesOf('Selection Fields', module)
  .add("Select default", () => <Select size="default" value="Select"></Select>)
  .add("Select default fill", () => <Select size="default" value="Select" filled></Select>)
  .add("Select ml", () => <Select size='ml' value="Select"></Select>)
  .add("Select ml fill", () => <Select size='ml' value="Select" filled></Select>)
  .add("Select l", () => <Select size='l' value="Select"></Select>)
  .add("Select l fill", () => <Select size='l' value="Select" filled></Select>)
