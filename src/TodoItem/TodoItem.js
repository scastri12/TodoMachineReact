import './TodoItem.css';
import { CompleteIcon } from './../TodoIcon/CompleteIcon';
import { DeleteIcon } from './../TodoIcon/DeleteIcon';
import React from "react";

function TodoItem({ text, completed, onCompleted, onDelete}) {
  return (
    <li className="TodoItem">
      <CompleteIcon
      completed={completed}
      onCompleted={onCompleted} />
      
      <p className={`TodoItem-p
      ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>

      <DeleteIcon 
      onDelete={onDelete}/>
      
    </li>
  );
}

export { TodoItem };
