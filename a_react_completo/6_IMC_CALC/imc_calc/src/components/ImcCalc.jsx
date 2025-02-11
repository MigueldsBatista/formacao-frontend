/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from "./Button"


const ImcCalc = ({ calcIMC  }) => {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");


  const validDigis = (text, allowComma) =>{
    if (allowComma) return text.replace(/[^0-9,]/g, "");

    return text.replace(/[^0-9]/g, "");
   
  }

  const handleHeight = (e) =>{
    //verification && stuff

    setHeight(validDigis(e.target.value));

    console.log(height);
    
  }
  const handleWeight = (e) =>{
    //verification && stuff
    setWeight(validDigis(e.target.value, true));

    console.log(weight);
    
  }

  const clearForm = (e) =>{
    e.preventDefault();
    setHeight("");
    setWeight("");

  }

  return (
    <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form action="" id="imc-form">
    <div className="form-inputs">
    <div className="form-control">
    <label htmlFor="height">Altura (cm):</label>
    <input type="text" name="height" id="height" 
    placeholder="Exemplo 175"
    onChange={handleHeight}
    value={height}
    
    />
    
    </div>
    <div className="form-control">
    <label htmlFor="weight">Peso (kg):</label>
    <input type="text" name="weight" id="weight" 
    placeholder="Exemplo 75"
    onChange={handleWeight}
    value={weight}
    />
    
    </div>
    
    </div>
    <div className="action-control">

    <Button id="calc-btn" text="Calcular" onClick={(e)=>calcIMC(e, height, weight)}></Button>

    <Button id="clear-btn" text="Limpar" onClick={clearForm}></Button>

    </div>
    </form>
    
    </div>
  )
}

export default ImcCalc