import React, { useState, useEffect } from 'react';
import { database } from './firebase';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const todosRef = database.ref('todos');
    todosRef.on('value', (snapshot) => {
      const data = snapshot.val();
      const todoItems = data ? Object.values(data) : [];
      setTodos(todoItems);
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      content: input,
    };

    database.ref(`todos/${newTodo.id}`).set(newTodo);

    setInput('');
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;