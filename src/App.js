import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TotalCompleteTodo from "./components/TotalCompleteTodo";

export const App = () => {
  console.log('Test log 123e2e1fs121sfd');
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date().toLocaleDateString("en-US", options);

  return (
    <div className="container bg-light border p-3 mt-3">
      <div className="d-flex justify-content-between py-3 border-bottom">
        <p className="h3">Todo - App </p>
        <span className="lead">{date + ""}</span>
      </div>
      <AddTodo />
      <TotalCompleteTodo />
      <TodoList />
    </div>
  );
};

export default App;
