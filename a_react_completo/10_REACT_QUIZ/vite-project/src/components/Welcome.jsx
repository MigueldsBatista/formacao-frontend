import { useContext } from "react";
import Quiz from "../assets/img/quiz.svg";
import { QuizContext } from "../context/quiz";

import "./Welcome.css"

const Welcome = () => {
    //quiz state pega os valores e o dispatch altera
const [quizState, dispatch] = useContext(QuizContext);

console.log(quizState);

  return (
    <div id="welcome">
        <h2>Seja bem vindo !</h2>

        
        <p>Clique no botão abaixo para começar</p>
        <button onClick={()=>dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Imagem quiz" />

    </div>
  )
}

export default Welcome