import React from "react";

const Input = (props) => {
  const inputProps = {
    className: "input-text",
    value: props.value,
    onChange: props.handleChange,
  };

  return (
    <label className="label">
      {props.label}

      {props.isTextArea ? (
        <textarea {...inputProps} style={{ height: "100px" }} />
      ) : (
        <input type="text" {...inputProps} />
      )}
    </label>
  );
};

export default Input;
