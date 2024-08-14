import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Regar las plantas', completed: false },
  { text: 'Estudiar react', completed: false },
  { text: 'Usar estados derivados', completed: true },
] 

  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */
  //localStorage.removeItem('TODOS_V1');

 

function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  console.log('los usuarios buscan todos de ' + searchValue);
  return (
    <AppUI
    
      completedTodos = { completedTodos }
      totalTodos = { totalTodos }
      searchValue = { searchValue }
      setSearchValue = { setSearchValue }
      deleteTodo = { deleteTodo }
      searchedTodos = { searchedTodos }
      completeTodo = { completeTodo }
  />
  );
}

export default App;
