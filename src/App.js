import React, { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Fernando ', done: false },
    { id: 2, title: 'Lúcia dos Santos ', done: true },
    { id: 3, title: 'Lúcia', done: true },
  ])

  const handleToggle = (selectedTodo) => {
    setTodos(todos.map(todo => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          done: !selectedTodo.done
        }
      }
      return todo
    }))
  }

  const handleAdd = (newTodo) => {
    setTodos([...todos, {
      id: todos.length + 1,
      title: newTodo,
      done: false
    }])
  }

  return (
    <div className="App">
      <List
        items={todos}
        title="Servidor Emerj teste"
        onToggle={handleToggle}
        onAdd={handleAdd}
      />
    </div>
  );
}

export default App;
