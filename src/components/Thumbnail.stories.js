import React from 'react'
import { storiesOf } from '@storybook/react';
import Thumbnail from './Thumbnail'

storiesOf('Thumbnails', module)
  .add('Dark Thumbnail', () => <Thumbnail
    pic="../icons/macbook.jpg"
    product="Apple Macbook Pro"
    retail={599}
    discount={499}
    outline />)
  .add('Light Thumbnail', () => <Thumbnail
    pic="../icons/macbook.jpg"
    product="Apple Macbook Pro"
    retail={599}
    discount={499}
    outline />)
