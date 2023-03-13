import "./App.css";
import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";
import { Field } from "./components/Field/Field";
import { Answer } from "./components/Answer/Answer";
import React from "react";
import { Popup } from "./components/Popup/Popup";

function App() {
  const [digits, setDigits] = React.useState([0, 0]);
  const [isInfoPopupOpened, setIsInfoPopupOpened] = React.useState(false);

  React.useEffect(() => {
    refreshTask();
  }, []);

  const refreshTask = () => {
    const a = Math.floor(Math.random() * 4 + 6);
    const b = Math.floor(Math.random() * 7 + 3);
    setDigits([a, b]);
  };

  const closeInfoPopup = () => {
    setIsInfoPopupOpened(false);
  };
  const onInfoPopupOpenClick = () => {
    setIsInfoPopupOpened(true);
  };

  return (
    <div className="page">
      <Header onParentsButtonClick={onInfoPopupOpenClick} />
      <main>
        <Task digits={digits} onRefreshCick={refreshTask} />
        <Field />
        <Answer />
        <Popup
          isOpen={isInfoPopupOpened}
          onClose={closeInfoPopup}
          title="Уважаемые родители!"
          text="Надеюсь, данная игра понравится вашему малышу,
          поможет ему осознать принцип сложения чисел, сумма которых больше
          десяти, и привьет ему любовь к математике. Игра предназначена для детей в возрасте от 3 до 6 лет, которые
          уже умеют считать до десяти и складывать простейшиче числа. Поначалу,
          помогите ребенку. Объясните, что нужно выполнить задание ниже, добавив
          нужное количество кажого животного, как у казано в задании. Обратите
          внимание, что в первом ряду всегда получается десять животных. И общую
          сумму лугко догатадться по числу животных, получившемся во втором
          ряду. Приятной игры!"
        />
      </main>
    </div>
  );
}

export default App;
