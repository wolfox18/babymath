import React from "react";
import "./Answer.css";
import { shuffle } from "../../Utils/utils";

export const Answer = ({ rightAnswer }) => {
  const [variants, setVariants] = React.useState([]);
  React.useEffect(() => {
    var array = [];
    var newVariants = [];
    for (let i = 10; i <= 20; i++) {
      if (i !== rightAnswer) array.push(i);
    }
    for (let countCycles = 1; countCycles <= 5; countCycles++) {
      newVariants.push(array.splice(Math.random() * array.length, 1)[0]);
    }
    newVariants.push(rightAnswer);
    shuffle(newVariants);
    setVariants(newVariants);
  }, []);

  const handleVariantClick = (answer) => {
    console.log(answer === rightAnswer);
  };
  return (
    <section className="block">
      <div className="block__container">
        <h2 className="answer__title">Твой ответ?</h2>
        <ul className="answer__variants">
          {variants.map((variant) => (
            <li
              onClick={handleVariantClick(variant)}
              className="answer__variant"
            >
              {variant}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
