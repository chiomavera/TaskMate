import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      const errorMessage = "Please fill in your task!"
      return setErrorMessage(`${errorMessage}`)
    }
    editTodo(value, task.id);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value.trim() !== "") {
      setErrorMessage("");
  }
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
      {errorMessage && <p className="error__message">{errorMessage}</p>}
        <input
          type="text"
          className="todo__input"
          placeholder="Update Task"
          aria-label="input-field"
          autoComplete="off"
          value={value}
          onChange={handleChange}
          maxLength="60"
        />
        <button type="submit" className="todo__btn" title="update task">
          <FontAwesomeIcon icon={faSave} />
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
