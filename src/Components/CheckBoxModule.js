import React from "react";
import checkboxStyles from "../CSS/checkbox.module.css";

function CheckboxModule({ checked, ...props }) {
  return (
    <div className={checkboxStyles.checkContainer}>
      <div className={checkboxStyles.checkbox} {...props}>
        {checked && (
          <svg className={checkboxStyles.icon} viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </div>
  );
}

export default CheckboxModule;
