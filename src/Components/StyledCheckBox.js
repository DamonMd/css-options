import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 1rem;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? props.theme.lightBlue : "white")};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = ({ checked, ...props }) => (
  <CheckboxContainer>
    <StyledCheckbox checked={checked} {...props}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
