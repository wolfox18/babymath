import React from "react";
import "./Task.css";

export const Task = ({digits, onRefreshCick}) => {
  return (
    <section className="block">
      <div className="block__container">
        <button onClick={onRefreshCick} className="task__reload"></button>
        <ul className="task__container">
          <li className="task__letter">{digits[0]}</li>
          <li className="task__letter">+</li>
          <li className="task__letter">{digits[1]}</li>
          <li className="task__letter">=</li>
          <li className="task__letter">?</li>
        </ul>
      </div>
    </section>
  );
};
