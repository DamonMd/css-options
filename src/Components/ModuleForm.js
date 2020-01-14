import React, { useState } from "react";
import ModuleCheckbox from "./ModuleCheckBox";
import formStyles from "../CSS/form.module.css";
import buttonStyles from "../CSS/button.module.css";

function ModuleForm() {
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

  const mandoThings = ["Baby Yoda", "Mando", "I have spoken..."];
  return (
    <>
      <div>
        <form className={formStyles.form}>
          <h4>Form using css modules</h4>
          <fieldset className={formStyles.fieldset}>
            <label className={formStyles.label}>First Name</label>
            <input
              className={formStyles.input}
              name="firstName"
              value={form.firstName}
              onChange={handleInputChange}
            />
            <label className={formStyles.label}>Last Name</label>
            <input
              className={formStyles.input}
              name="lastName"
              value={form.lastName}
              onChange={handleInputChange}
            />
            <label className={formStyles.label}>Tacos?</label>
            <input
              className={formStyles.input}
              name="tacos"
              value={form.tacos}
              onChange={handleInputChange}
            />
            <label className={formStyles.label}>Check Please</label>
            <ModuleCheckbox
              checked={isChecked}
              onClick={handleCheckBoxChange}
            />
            <textarea
              className={formStyles.textarea}
              name="more"
              value={form.more}
              onChange={handleInputChange}
            ></textarea>
            <div>
              <select
                className={formStyles.select}
                name="selection"
                onChange={handleInputChange}
              >
                {mandoThings.map(thing => (
                  <option key={thing} value={thing}>
                    {thing}
                  </option>
                ))}
              </select>
            </div>
            <button className={buttonStyles.btnPrimary}>foo</button>
            <button className={buttonStyles.btnDanger} onClick={handleCancel}>
              bar
            </button>
            <button className={buttonStyles.btn}>biz</button>
          </fieldset>
        </form>
      </div>
      <div className={formStyles.form}>
        {Object.keys(form).map(key => {
          return (
            <div key={key}>
              <h2>
                {key}: <span>{form[key]}</span>
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ModuleForm;
