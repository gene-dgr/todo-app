import React, { useState, useEffect } from 'react';
import './css/App.css';
import { TodoCounter } from './components/todoCounter';
import { TodoSearch } from './components/todoSearch';
import { TodoList } from './components/todoList';
import { TodoItem } from './components/todoItem';
import { CreateTodoButton } from './components/createTodoButton';

const defaultTodos = [
  { id: 0, text: 'cortar cebolla', completed: true },
  { id: 1, text: 'estudiar react', completed: false },
  { id: 2, text: 'llorar con la cebolla', completed: true }
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  

  //filtrando y contabilizando los todos completados y el total de todos
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;



//funcion para la busqueda de todos
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }


  //funcion para completar todos
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  
  //funcion para eliminar todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>


      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem 
            key={todo.text} 
            text={ todo.text } 
            completed={todo.completed} 
            onComplete={ () => completeTodo(todo.text) }
            onDelete={ () => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />


    </React.Fragment>
  );
}

export default App;
