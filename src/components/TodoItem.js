import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/TodoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleChecked = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li
      className={`list-group-item ${completed && "list-group-item-success"}`}
      onClick={handleChecked}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center h5 mb-0">
          <input
            type="checkbox"
            className="mx-3"
            checked={completed}
            onChange={handleChecked}
          />
          {title}
        </span>
        <button onClick={handleDeleteTodo} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
