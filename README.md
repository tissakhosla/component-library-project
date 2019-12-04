# Storybook Component Library

 - Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient.

 - When setup well, the components are very flexible and allow for certain custom, or contextual information to be passed in as props. Storybook itself is a way to manage, view and organize a component library which can be implemented and personalized. 

### Basic steps

1. Fork and clone this repository. 
1. Once the necessary dependencies are installed, use `npm run storybook` to run the storybook server. 
1. If the command fails, confirm that `"storybook": "start-storybook"` is in the scripts object within package.json.

### Organization of Library

- The Library is organized into categories known as Stories, which are setup in Component.stories.js. 
- They begin with the components at the lowest level, and as we go down the list, the components have components within them. 
- Each Story can also be setup this way. See ***Atomic Design in React***

### Pros of using Storybook/Component Library

 - When working on projects, components can be created and tested in isolation, and then easily transferred. 
 - Once it has been built it can be reused and tweaked for many other functions, and each version will add to the growing library. 
 - There are already great component libraries out there to use!
      - http://react.carbondesignsystem.com/
      - https://storybook.js.org/docs/examples/

## Building hip components is an art! 
