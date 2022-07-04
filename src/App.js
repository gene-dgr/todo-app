import React, { useState }from 'react';
import './css/App.css';
import { TodoCounter } from './components/todoCounter';
import { TodoSearch } from './components/todoSearch';
import { TodoList } from './components/todoList/TodoList';
import { TodoItem } from './components/todoItem/TodoItem';
import { CreateTodoButton } from './components/createTodoButton';

const defaultTodos = [
  { text: 'cortar cebolla', completed: false },
  { text: 'estudiar react', completed: false },
  { text: 'llorar con la cebolla', completed: true }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>


      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={ todo.text } completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />


    </React.Fragment>
  );
}

export default App;
