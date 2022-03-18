import './App.css';
import './index.css';
import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

// Need to keep track of list of todos for user 

function App() {
  // setting up todos
  const [todos, setTodos] = useState([]) //initial todo state

  // deleting todo items - react info flows downward
  // such to modify state of parent - need to pass callback to modify info
  // setting up delete todo callback
  const deleteTodo = (index) => {
    // grab a copy of current todoItems
    const newTodos = [...todos]
    // and delete todo at given index
    newTodos.splice(index, 1)
    // set Todos to newTodos with items clicked deleted
    setTodos(newTodos)
    // now call this in the app function below and also in the TodoItem function
    // to delete on click
  }
  
  // simiarly to delete - need new callback for add todo items
  const addTodo = (todo) => {
    // grab all current todos, add new todo to it, and set it
    const newTodos = [...todos, todo]
    setTodos(newTodos)
    // now call this in app function below and also in AddTodo function
  }
  
  // compose all todos
  return (
    <div className="App">
      <h1>To Do List</h1>
      {todos.map((item, i) => <TodoItem
      key={i}
      name={item}
      deleteCallback={() =>deleteTodo(i)}
      />)}
      <AddTodo addCallback={addTodo} />
    </div>
  )
}

export default App;
