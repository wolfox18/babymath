import React from "react";
import "./Field.css";
import elephantPicture from "../../images/elephant.jpg";
import rabbitPicture from "../../images/rabbit.jpg";
import { animals } from "../Answer/Utils/utils";

export const Field = () => {
 const [animalCards, setAnimalCards] = React.useState([]);

 const addElephantCard = () => {
    setAnimalCards([...animalCards, { type: 'elephant' }]);
  };

  const addRabbitCard = () => {
    setAnimalCards([...animalCards, { type: 'rabbit' }]);
  };

  const deleteAnimalCard = (index) => {
    const updatedCards = [...animalCards];
    updatedCards.splice(index, 1);
    setAnimalCards(updatedCards);
  };

  const clearField = () => {
    setAnimalCards([]);
  }

  console.log(animals);

  return (
    <section className="block">
      <div className="block__container">
        <div className="field__controllers-container">
          <div className="field__add-container">
            <img
              src={elephantPicture}
              alt=""
              className="field__character-example"
            />
            <button onClick={addElephantCard} className="field__add-button">
              +
            </button>
          </div>
          <div className="field__add-container">
            <img
              src={rabbitPicture}
              alt=""
              className="field__character-example"
            />
            <button onClick={addRabbitCard} className="field__add-button">
              +
            </button>
          </div>
        </div>
        <ul className="field__grid">
          {animalCards.map((card, index) => (
          // <li key={index} className={`field__cell field__cell_type_${card.type}`} onClick={() => deleteAnimalCard(index)}>
          // </li>
          <li key={index} className="field__cell" onClick={() => deleteAnimalCard(index)}>
            <img className="field__cell-image" src={`/images/${card.type}.jpg`} alt={card.type} />
          </li>
        ))}
        </ul>
        <button onClick={clearField} className="field__button" />
      </div>
    </section>
  );
};
