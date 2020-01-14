import styled, { css } from "styled-components";
import { isProperty } from "@babel/types";

const Button = styled.button`
  width: 100px;
  height: 50px;
  color: ${props =>
    props.primary ? props.theme.lightBlue : props.cancel ? "red" : "white"};
  border: 2px solid
    ${props =>
      props.primary ? props.theme.lightBlue : props.cancel ? "red" : "white"};
  background: none;
  font-weight: 500;
  transition: all 0.5s;
  cursor: pointer;
  margin: 1rem;
  &:hover {
    color: white;
    background: ${props =>
      props.primary ? props.theme.lightBlue : props.cancel ? "red" : "black"};
  }
`;

// this is the same as the button above but shows how you can use the css method
// to add multiple styles in addition to or to overide properties based on a prop
// passed to the component
const RefactoredButton = styled.button`
  width: 100px;
  height: 50px;
  color: white;
  border: 2px solid white;
  background: none;
  font-weight: 500;
  transition: all 0.5s;
  cursor: pointer;
  margin: 1rem;
  &:hover {
    color: white;
    background: black;
  }
  ${props =>
    props.primary &&
    css`
      color: ${props.theme.lightBlue};
      border: 2px solid ${props.theme.lightBlue};
      &:hover {
        color: white;
        background: ${props.theme.lightBlue};
      }
    `}

  ${props =>
    props.yoda &&
    css`
      color: green;
      border: 2px solid green;
      &:hover {
        color: white;
        background: green;
      }
    `}
`;

export { RefactoredButton };
export default Button;
