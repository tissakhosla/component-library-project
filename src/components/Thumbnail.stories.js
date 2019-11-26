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
    product="Apple Macbook Pro"
    retail={599}
    discount={499}
    outline />)
  .add('Dark Landscape', () => <Thumbnail
    orientation='landscape'
    shade='dark'
    product="Apple Macbook Pro"
    retail={599}
    discount={499}
    outline />)
  .add('Light Landscape', () => <Thumbnail
    orientation='landscape'
    shade='light'
    product="Apple Macbook Pro"
    retail={599}
    discount={499}
    outline />)
  .add("Floating Thumbnail", () => <Thumbnail
    headphones
    orientation='landscape'
    shade='light'
    product="Beats Solo 2 On Ear Headphones - Black"
    retail={499}
    discount={299}/>)
