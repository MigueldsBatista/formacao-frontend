import { useContext } from "react"
import "./Options.css"

import { QuizContext } from "../context/quiz"

const Options = ({option, onSelectedOption, answer, hide}) => {

  const [quizState, dispatch] = useContext(QuizContext);
  console.log(option===answer);
  console.log(hide);
  
  return (
    <div className={
      `option ${quizState.answerSelected && option===answer ? "correct" : ""}
      ${quizState.answerSelected && option!==answer ? "wrong" : ""}
      ${hide ? "hide" : ""}`
    }
    onClick={
        ()=>(onSelectedOption())
    }>
        <p>{option}</p>
    </div>
  )
}

export default Options