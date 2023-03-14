import React from "react";
import "./Answer.css";

export const Answer = (rightAnswer) => {
  var array = [];

  for (let i = 10; i <= 20; i++) {
    array.push(i);
  }

  for (let countCycles = 1; countCycles <= 5; countCycles++) {
    console.log(array.splice(Math.random() * array.length, 1)[0]);
  }
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
