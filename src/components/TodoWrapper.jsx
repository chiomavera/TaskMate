import React from "react";
import useLocalStorage from "../hooks/Uselocalstorage";
import { nanoid } from "nanoid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodo";
nanoid();


const TodoWrapper = () => {
  const [todos, setTodos] = useLocalStorage('react.todo.task', []);


  const addTodo = (todo) => {
    const newTodos = {
      id: `todo-${nanoid()}`,
      task: todo,
      completed: false,
      isEditing: false,
    };

    setTodos([...todos, newTodos]);
  };

  
  
  const toggleCompleteTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="todo__wrapper">
      <h1>Get Started With Your Day </h1>
      <TodoForm addTodo={addTodo} />

      {/* display todos */}
      {todos.map((todo, id) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={id}
            onCheck={toggleCompleteTask}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
