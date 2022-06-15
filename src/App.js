import React from 'react';
import './css/App.css';
import { TodoCounter } from './components/todoCounter';
import { TodoSearch } from './components/todoSearch/TodoSearch';
import { TodoList } from './components/todoList/TodoList';
import { TodoItem } from './components/todoItem/TodoItem';
import { CreateTodoButton } from './components/createTodoButton';

const todos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'estudiar react', completed: false },
  { text: 'llorar con la cebolla', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />


      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={ todo.text } />
        ))}
      </TodoList>

      <CreateTodoButton />


    </React.Fragment>
  );
}

export default App;
