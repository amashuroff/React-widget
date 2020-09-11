import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a Front-End Library",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "how do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "Color Red",
    value: "red",
  },
  {
    label: "Color Green",
    value: "green",
  },
  {
    label: "Color Blue",
    value: "blue",
  },
];

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <button
        className="ui button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Toggle dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label={'Select a color'}
        >
          <p style={{ color: selected.value }}>The text is {selected.value}</p>
        </Dropdown>
      ) : null} */}

      <Translate  />
    </div>
  );
};
