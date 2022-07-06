import React, { useState, useEffect } from 'react';
import './css/App.css';
import { TodoCounter } from './components/todoCounter';
import { TodoSearch } from './components/todoSearch';
import { TodoList } from './components/todoList/TodoList';
import { TodoItem } from './components/todoItem/TodoItem';
import { CreateTodoButton } from './components/createTodoButton';

const defaultTodos = [
  { id: 0, text: 'cortar cebolla', completed: true },
  { id: 1, text: 'estudiar react', completed: false },
  { id: 2, text: 'llorar con la cebolla', completed: true }
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [taskCompleted, setTaskCompleted] = React.useState(false);
  
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos =  defaultTodos;
  }else{
    searchedTodos = defaultTodos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>


      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem 
            key={index} 
            text={ todo.text } 
            completed={todo.completed} 
          />
        ))}
      </TodoList>

      <CreateTodoButton />


    </React.Fragment>
  );
}

export default App;
