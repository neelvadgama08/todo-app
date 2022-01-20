import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteTodo = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return <p className="h5 mt-3">Total Completed Tasks : {todos.length}</p>;
};

export default TotalCompleteTodo;
