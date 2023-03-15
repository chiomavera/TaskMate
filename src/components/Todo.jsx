import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, onCheck, deleteTodo, editTodo }) => {
  return (
    <>
      <div className="Todo">
        <div
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            textDecorationColor: task.completed ? "#eee" : "inherit",
          }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onCheck(task.id)}
            className="check__box"
          />
          {task.task}
        </div>
        <div>
          <button
            className="fa__edit"
            title="edit task"
            onClick={() => editTodo(task.id)}
            aria-label="edit task"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            className="fa__trash"
            onClick={() => deleteTodo(task.id)}
            title="delete task"
            aria-label="delete task"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
