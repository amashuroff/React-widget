import React from "react";

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="item">
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="lable">Select color</label>
        <div className="ui selection dropdown visible active">
            <icon className="dropdown icon"></icon>
            <div className="text">Select color</div>
            <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
