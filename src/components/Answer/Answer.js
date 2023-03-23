import React from "react";
import "./Answer.css";
import { Variant } from "../Variant/Variant";

export const Answer = ({ rightAnswer, variants }) => {

  return (
    <section className="block">
      <div className="block__container">
        <h2 className="answer__title">Твой ответ?</h2>
        <ul className="answer__variants">
          {variants.map((variant) => (
            <Variant
              number={variant}
              isCorrect={variant === rightAnswer ? true : false}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
