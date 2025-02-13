//react, css, estaticos -> precedencia
import Welcome from "./components/Welcome"
import Question from "./components/Question";
import { QuizContext } from "./context/quiz";
import { useContext, useEffect } from "react";

import "./App.css"
import GameOver from "./components/GameOver";
import PickCategoty from "./components/PickCategoty";

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  // useEffect(()=>{
  //   dispatch({type:"REORDER_QUESTIONS"})
  // }, [])//Só executa uma vez

  

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      
      {quizState.gameStage ==='start' && <Welcome />}
      {quizState.gameStage ==='category' && <PickCategoty />}
      {quizState.gameStage ==='playing' && <Question />}
      {quizState.gameStage ==='end' && <GameOver />}

    </div>
  )
}

export default App
