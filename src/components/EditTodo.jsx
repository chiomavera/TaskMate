import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  const handleChange = (e) => setValue(e.target.value);
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
