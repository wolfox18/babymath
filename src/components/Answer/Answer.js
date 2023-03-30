import React from "react";
import "./Answer.css";

export const Answer = ({ rightAnswer, variants }) => {
  const [selectedVariant, setSelectedVariant] = React.useState(null);
  React.useEffect(()=>{
    setSelectedVariant(null)
  }, variants);

  return (
    <section className="block">
      <div className="block__container">
        <h2 className="answer__title">Твой ответ?</h2>
        <ul className="answer__variants">
          {variants.map((variant, index) => (
            <li
            key={index}  
            onClick={() => {
              console.log(index);
                setSelectedVariant(index);
              }}
              className={`answer__variant answer__variant_type_${
                selectedVariant === index
                  ? variant === rightAnswer
                    ? "correct"
                    : "wrong"
                  : "unselected"
              }`}
            >
              {variant}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
