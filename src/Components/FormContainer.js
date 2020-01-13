import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  darkBlue: "#282c34",
  lightBlue: "#61dafb",
  bs: "0 -2px 10px rgba(0, 0, 0, 1)",
  maxWidth: "1200px"
};

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after{
  box-sizing: inherit;
}
body{
  padding:0;
  margin:0;
  font-size: 1.5rem;
  line-height: 2;
}
`;

const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.darkBlue};
  color: white;
  min-height: 80vh;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

const FormContainer = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledPage>
        <Inner> {props.children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

export default FormContainer;
