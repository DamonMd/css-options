import React, { useState } from "react";
import styled from "styled-components";
import Form from "../Styles/Form";
import Button, { RefactoredButton } from "../Styles/Button";
import Checkbox from "./CheckBox";

function StyledForm() {
  const [isChecked, setChecked] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    tacos: "",
    more: "",
    selection: "Baby Yoda"
  });

  const handleCheckBoxChange = () => {
    setChecked(!isChecked);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleCancel = event => {
    event.preventDefault();
    setForm({
      firstName: "",
      lastName: "",
      tacos: "",
      more: "",
      selection: "Baby Yoda"
    });
  };

  const mandoThings = ["Baby Yoda", "Mando", "I have spoken"];

  let StateContainer = styled.div`
    box-shadow: ${({ theme }) => theme.bs};
    border: 2px solid white;
    text-align: left;
    padding: 1rem;
  `;

  return (
    <>
      <div>
        <Form>
          <h4>Form using styled components</h4>
          <fieldset>
            <label>First Name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleInputChange}
            />
            <label>Last Name</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleInputChange}
            />
            <label>Tacos?</label>
            <input
              name="tacos"
              value={form.tacos}
              onChange={handleInputChange}
            />
            <label>Check Please</label>
            <Checkbox onClick={handleCheckBoxChange} checked={isChecked} />
            <textarea
              name="more"
              value={form.more}
              onChange={handleInputChange}
            ></textarea>
            <div>
              <select name="selection" onChange={handleInputChange}>
                {mandoThings.map(thing => (
                  <option key={thing} value={thing}>
                    {thing}
                  </option>
                ))}
              </select>
            </div>
            <Button primary>Jedi</Button>
            <Button cancel onClick={handleCancel}>
              Sith
            </Button>
            <RefactoredButton>Standard</RefactoredButton>
            <RefactoredButton primary>IDK</RefactoredButton>
          </fieldset>
        </Form>
      </div>

      <StateContainer>
        {Object.keys(form).map(key => {
          return (
            <div key={key}>
              <h2>
                {key}: <span>{form[key]}</span>
              </h2>
            </div>
          );
        })}
      </StateContainer>
    </>
  );
}

export default StyledForm;
