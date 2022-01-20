import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";
import React, { useState } from "react";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          title: value,
        })
      );
    }
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="form-inline my-4" autoComplete="off">
      <div className="d-flex justify-content-center w-75">
        <input
          id="Todo"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add New Todo..."
          className="todo-input form-control-md mb-2 mr-3"
        />
        <button type="submit" className="btn btn-primary mb-2 mx-3">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
