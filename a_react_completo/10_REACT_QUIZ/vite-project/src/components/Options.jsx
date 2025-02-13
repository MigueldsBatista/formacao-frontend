import { useContext } from "react"
import "./Options.css"

import { QuizContext } from "../context/quiz"

const Options = ({option, onSelectedOption, answer}) => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={
      `option ${quizState.answerSelected && option===answer ? "correct" : ""}
      ${quizState.answerSelected && option!==answer ? "wrong" : ""}`
    } id="option" 
    onClick={
        ()=>(onSelectedOption())
    }>
        <p>{option}</p>
    </div>
  )
}

export default Options