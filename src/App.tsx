import React, { useState } from 'react';

// A simple Todo component built with React and TypeScript
const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  // Add a new todo item to the list
  const addTodo = () => {
    const trimmed = input.trim();
    if (trimmed) {
      setTodos([...todos, trimmed]);
      setInput('');
    }
  };

  // Handle pressing Enter key in the input to add the todo
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>GPT Todo List</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task"
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={addTodo} style={{ padding: '0.5rem 1rem' }}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
