import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log(quizState);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

  return (
    <div>
        <p>Pergunta {quizState.currentQuestion+1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">

        </div>
        <button onClick={()=> dispatch}>Continuar</button>
    </div>
  )
}

export default Question