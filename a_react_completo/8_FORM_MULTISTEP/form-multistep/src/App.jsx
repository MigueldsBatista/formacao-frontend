/* eslint-disable react/jsx-key */
import './App.css'

import {GrFormNext, GrFormPrevious, GrSend} from "react-icons/gr"


import { useForm } from './hooks/useForm'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'
import { useState } from 'react'

function App() {

  const [data, setData] = useState("");

  const formTemplate ={
    name:"",
    email:"",
    review:"",
    comment:""
  };

  const updateFieldHandler = (key, value) =>{
    setData((prev)=> {
      return {...prev, [key]:value}
      //Ele não vai alterar os campos existentes do obj, apenas a chave que 
      //queremos atualizar
    })
  }

  const formComponents =[
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data}/>
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
      <div className='app'>
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>

        </div>
        <Steps currentStep={currentStep}/>
        <div className="form-container">
        
        <form onSubmit={(e)=> changeStep(currentStep+1, e)}>

          <div className="inputs-container">

          {currentComponent}

          </div>

          <div className="actions">
          
            {!isFirstStep &&
            <button type='button'
            onClick={(e)=> changeStep(currentStep-1, e)}
            >
            <GrFormPrevious />
            <span>Voltar</span>
            </button>

            }

            {!isLastStep ? (
              <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
              </button>

            ) : (
              <button type='submit'>
              <span>Enviar</span>
              <GrSend/>
              </button>

            )}


          </div>
        
        </form>
        </div>
      </div>
  )
}

export default App
