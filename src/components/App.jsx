import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  const [showGuide, setShowGuide] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#54a0ff"); 

  function handleColorChange(event) {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
    setBackgroundColor(selectedColor);
  }

  function addItem(inputText) {
    setItems((prevItems) => [...prevItems, inputText]);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  
  function closeGuide() {
    setShowGuide(false);
  }

  setTimeout(closeGuide, 9000);


  return (
    
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAddItem={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
      <div className="picker-container">
        <p>Color Picker:</p>
        <div className="color-picker">
          <input type="color" value={backgroundColor} onChange={handleColorChange} />
        </div>
      </div>
      {showGuide && (
        <div className="guide-card">
          <h2>App Usage Guide</h2>
          <p>Instructions on how to use the app:</p>
          <ul>
            <li>Enter your to-do item in the input field.</li>
            <li>Click add to add it to your list.</li>
            <li>Click on the to-do item once you've completed it.</li>
          </ul>
          <button onClick={closeGuide}>Close</button>
        </div>
        )}
    </div>
  );
}

export default App;
