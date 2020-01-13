# css-options

This repo has a react form(using hooks) that has been duplicated using two different methods to implement css. The form consists of a few standard inputs, a checkbox, and some buttons. Where applicable, I attempted to use different implementations of of the css below, most notably in styled-components as it has more flexibility in how to define/extend some of the css properties and it also allows you to declare the css within the same jsx file.

Overall layout on a page level uses a simple implemetation of css grid(2 columns, auto rows, and some padding between the sections)

## Styled-Components

https://www.styled-components.com/

- A CSS in JS small library

- With styled-components you create custom React components that styled-components then renders as a specific and valid HTML element

- Written using standard css

- Supports pseudo-classes

- Can be placed within your jsx file or in a seperate js file and imported into your react component as a named import, i.e.
  `import Button, { RefactoredButton } from "../Styles/Button"`

- Can still set global styling on the body, html, etc

- Can create a theme object with variables that can be used by any styled component

- Allows you to change styles of your components according to its props. Imagine that you want to create a new variant of a button, say large. Then, you don’t have to create a new variable for a new button. Instead, you attach a new prop to the button component and use it to apply different styles, like: `props => props.large && css`width: 400px`.`

## CSS Modules

- CSS modules allows you to keep your CSS styles in external CSS files

- Helps them keep their project structure clean and organized.

- You can't however have css declared in your jsx file

- Use named import, i.e. `import buttonStyles from './button.module.css'`. The ‘buttonStyles’ name can be anything you want. You will use this name later when you will want to reference this stylesheet, when you will want to apply the styles in this stylesheet.

- To import a specific style, defined inside a class, you use the name of the import followed by dot (.) followed by the class name. So, if the button.module.css contains styles for .btnPrimary the syntax will be buttonStyles.btnPrimary

- One thing that CSS modules allow, and CSS not, is extending one CSS class with another. In other words, you can let one class inherit styles from another. As a result, you don’t have to write the same chunk of CSS multiple times. Instead, you can create a “base” class with all default styles.
