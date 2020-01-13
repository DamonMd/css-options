import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormContainer from "./Components/FormContainer";
import StyledForm from "./Components/StyledForm";
import ModuleForm from "./Components/ModuleForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FormContainer>
        <StyledForm />
        <ModuleForm />
      </FormContainer>
    </div>
  );
}

export default App;
