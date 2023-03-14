import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Todo = ({task, onCheck, deleteTodo, editTodo}) => {
  return (
    <>
      <div className="Todo">
      
      <div style={{ textDecoration: task.completed ? 'line-through' : 'none',
       textDecorationColor: task.completed ? "#eee" : "inherit" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onCheck(task.id)}
        className="check__box"
      />
      {task.task}
    </div>
        <div>
          <FontAwesomeIcon icon={faPenSquare} 
          onClick={() => editTodo(task.id)} />
          <FontAwesomeIcon icon={faTrash} className="fa__trash" 
          onClick={() => deleteTodo(task.id)} />
        </div>
      </div>
    </>
  );
};

export default Todo;
