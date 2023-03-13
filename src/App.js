import './App.css';
import { Header } from './components/Header/Header';
import { Task } from './components/Task/Task';
import { Field } from './components/Field/Field';
import { Answer } from './components/Answer/Answer';
import React from 'react';

function App() {
  const [digits, setDigits] = React.useState([0, 0]);

  React.useEffect(() => {
    refreshTask();
  }, [])

  const refreshTask = () => {
    const a = Math.floor(Math.random() * 4 + 6);
    const b = Math.floor(Math.random() * 7 + 3);
    setDigits([a, b]);
  }

  return (
    <div className="page">
      <Header />
      <main>
        <Task digits={digits} onRefreshCick={refreshTask}/>
        <Field />
        <Answer />
      </main>
    </div>
  );
}

export default App;
