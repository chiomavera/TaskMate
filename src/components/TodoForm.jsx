import React, { useState } from "react";


const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === ''){
      const errorMessage = "Please fill in your task!"
      return setErrorMessage(`${errorMessage}`)
    }
    addTodo(value);
    setValue('')
  };

  const handleChange = (e) => setValue(e.target.value)
  return (
    <div>
      <form onSubmit={handleSubmit}>
      {errorMessage && <p className="error__message">{errorMessage}</p>}
        <input
          type="text"
          className="todo__input"
          placeholder="What is your task for Today?"
          aria-label="input-field"
          autoComplete="off"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="todo__btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
