import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = { 
      id: uuidv4(), 
      task: todo, 
      completed: false, 
      isEditing: false }

    setTodos([...todos, newTodos]);
    console.log(todo);
  };

  const handleTodoCheck = (id) => {
    setTodos(todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed} : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEditTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
    ))
  }

  return (
    <div className="todo__wrapper">
      <h1>Get Started With Your Day </h1>
      <TodoForm addTodo={addTodo} />

      {/* display todos */}
      {todos.map(todo => (
        <Todo 
        task={todo} 
        key={todo.id} 
        onCheck={handleTodoCheck} 
        deleteTodo={handleDeleteTodo}
        editTodo={handleEditTodo} />
      ))}
    </div>
  );
};

export default TodoWrapper;
