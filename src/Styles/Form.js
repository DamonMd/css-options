import styled from "styled-components";

const Form = styled.form`
  box-shadow: ${({ theme }) => theme.bs};
  border: 2px solid white;
  padding: 20px;
  line-height: 1.5;
  font-weight: 400;
  text-align: left;
  label {
    margin-bottom: 0.5rem;
    display: block;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 1px solid black;
    margin-bottom: 0.5rem;
    &:focus {
      outline: 0;
      border-color: ${({ theme }) => theme.lightBlue};
    }
  }
  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      background-image: linear-gradient(
        to right,
        #282c34 0%,
        #61dafb 50%,
        #282c34 100%
      );
    }
  }
`;

export default Form;
