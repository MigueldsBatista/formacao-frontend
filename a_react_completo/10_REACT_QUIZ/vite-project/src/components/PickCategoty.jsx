import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Category from "../assets/img/category.svg"

import "./PickCategory.css"

const PickCategoty = () => {
  
    const [quizState, dispatch] = useContext(QuizContext);
    const chooseCategoryAndReorderQuestions = (category) =>{
        dispatch({type:"START_GAME", payload:category})
        }
    return (
    <div id="category">
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo</p>
        <div>
            {quizState.questions.map((q)=>(
                <button 
                key={q.category}
                onClick={()=>chooseCategoryAndReorderQuestions(q.category)}
                >{q.category}
                
                </button>
            ))}
        </div>
        <img src={Category} alt="Categorias do quiz" />
    

    </div>
  )
}

export default PickCategoty