import React from "react";
import "./TodoFooter.css";
import { Link } from "react-router-dom";

function TodoFooter({ numberOfIncompleteTasks }) {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to="/followers">Followers</Link>
      <h2 data-testid="hello" style={{ opacity: 0 }}>
        hello
      </h2>
    </div>
  );
}

export default TodoFooter;
