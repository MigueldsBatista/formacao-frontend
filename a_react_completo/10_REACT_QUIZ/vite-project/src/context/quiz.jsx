/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import questions from "../data/questions_complete"

const STAGES = ["start", "category", "playing", "end"];

const initialState ={
    gameStage:STAGES[0],
    questions,
    currentQuestion:0,
    score:0,
    answerSelected:false,
    help:false,
    optionToHide:false
}


const quizReducer = ((state, action) =>{
    switch (action.type) {
        case "CHANGE_STATE":

            return {
                ...state,
                gameStage:STAGES[1],

            };

        case "START_GAME":{
            
            let quizQuestions = null;
            state.questions.forEach(q => {
                if(q.category===action.payload){
                    quizQuestions=q.questions
                }
            });
            return{
                ...state,
                questions:quizQuestions,
                gameStage:STAGES[2]
            }
        }
        case "REORDER_QUESTIONS": {
    
            const reorderedQuestions = questions.sort(()=>{
                return Math.random() - 0.5;
            });
    
            return {
                ...state,
                reorderedQuestions,
            };
        }
        case "CHANGE_QUESTION": {   
            let endGame = false;
            const nextQuestion = state.currentQuestion + 1;
            console.log(questions[nextQuestion]);
            
            if (!state.questions[nextQuestion]) {
                endGame = true;
            }
            return {
                ...state,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                currentQuestion: nextQuestion,
                answerSelected:false,
                help:false
            }
        }

        case "CHECK_ANSWER":{

            if(state.answerSelected) return state;
            
            const answer = action.payload.answer;
            const option =action.payload.option;
            console.log(answer, option);

            let correctAnswer=0;
            if(answer===option) correctAnswer=1;

            return{
                ...state,
                score:state.score+correctAnswer,
                answerSelected:option
            }
        }

        case "NEW_GAME":{
            return initialState;
        }

        case "SHOW_TIP":{
            return{
                ...state,
                help:"tip"
            }
        }

        case "REMOVE_OPTION":{
            const questionsWithoutOptions = state.questions[state.currentQuestion];

            let repeat = true;

            let optionToHide;

            questionsWithoutOptions.options.forEach((op)=>{
                if(op!==questionsWithoutOptions.answer && repeat){
                    optionToHide=op;
                    repeat=false
                    return;
                }
                

            })
            return{
                ...state,
                optionToHide,
                help:true
            }
        }
        default:

            return state
            
    }

}

)

export const QuizContext = createContext();

export const QuizProvider = (({children})=>{
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
});
