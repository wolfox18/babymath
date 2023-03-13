import React from "react";
import "./Answer.css";

export const Answer = () => {
  return (
    <section className="block">
      <div className="block__container">
        <h2 className="answer__title">Твой ответ?</h2>
        <ul className="answer__variants">
          <li className="answer__variant">2</li>
          <li className="answer__variant">3</li>
          <li className="answer__variant">4</li>
          <li className="answer__variant">5</li>
          <li className="answer__variant">6</li>
        </ul>
      </div>
    </section>
  );
};
