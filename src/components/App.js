import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import style from './App.module.css';
import StartQuiz from './StartQuiz';

function App() {
  return (
    <div className={style.Body}>
      <BrowserRouter>
      <StartQuiz/>
      <hr/>
      <StartQuiz/>
      </BrowserRouter>
    </div>
  );
}

export default App;
