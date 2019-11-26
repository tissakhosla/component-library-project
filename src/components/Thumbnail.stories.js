import React from 'react'
import { storiesOf } from '@storybook/react';
import Thumbnail from './Thumbnail'

storiesOf('Thumbnails', module)
  .add('Dark Portrait', () => <Thumbnail
    orientation='portrait'
    shade='dark'
    pic="../icons/macbook.jpg"
    product="Apple Macbook Pro"
    retail={599}
    discount={499}
    outline />)
  .add('Light Portrait', () => <Thumbnail
    orientation='portrait'
    shade='light'
    pic="../icons/macbook.jpg"
    product="Apple Macbook Pro"
    retail={599}
    discount={499}
    outline />)
  .add('Dark Landscape', () => <Thumbnail
    orientation='landscape'
    shade='dark'
    pic="../icons/macbook.jpg"
    product="Apple Macbook Pro"
    retail={599}
    discount={499}
    outline />)
  .add('Light Landscape', () => <Thumbnail
    orientation='landscape'
    shade='light'
    pic="../icons/macbook.jpg"
    product="Apple Macbook Pro"
    retail={599}
    discount={499}
    outline />)
