import React, { useState } from "react";

function InputArea(props) {
  // Child component state
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputValue} />
      <button
        onClick={() => {
          props.onAddItem(inputValue); // onAddItem is tied to the addItem in app.jsx
          setInputValue("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
