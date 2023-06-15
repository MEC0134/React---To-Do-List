
## React To-Do List App

This is a simple React application that allows you to create a to-do list. You can add items to the list, mark them as completed by clicking on them, and change the background color of the app using a color picker.

### Usage

To use the React To-Do List app, follow these steps:

1. Git clone https://github.com/MEC0134/to-do-list.git
2. cd to repository
3. Open folder in your choice of editor 
4. npm install 
5. npm start



### In the App component, you will find the following functions:

- addItem(inputText): This function is called when a new to-do item is added. It appends the new item to the existing list of items.
- deleteItem(id): This function is called when a to-do item is marked as completed. It removes the item from the list.
- handleColorChange(event): This function is triggered when the value of the color picker input changes. It sets the background color of the app based on the selected color.

### Component Files

- App.jsx: The main component that manages the state and rendering of the to-do list app.
- ToDoItem.jsx: The component that represents an individual to-do item in the list.
- InputArea.jsx: The component that renders the input field and "Add" button for adding new to-do items.

### Dependencies
This app requires the installation of React and its related dependencies. Run npm install to install the necessary packages.

### Styling
- The app includes CSS classes and styles defined in external style sheets. You can customize the styling by modifying the CSS files or adding your own styles.

### Credits
This React To-Do List app was created by [M. Enes Celik].

