import { useContext } from "react"
import WellDone from "../assets/img/welldone.svg"
import "./GameOver.css"
import { QuizContext } from "../context/quiz"
const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
    <h2>Fim de jogo!</h2>
    <p>Pontuação: {quizState.score>0?Math.floor(quizState.score/quizState.questions.length*100):0}%</p>
    <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
    <img src={WellDone} alt="Fim do QUiz" />
    <button onClick={()=>{
        dispatch({type:"NEW_GAME"})
    }}>Reiniciar</button>
    </div>
  )
}

export default GameOver