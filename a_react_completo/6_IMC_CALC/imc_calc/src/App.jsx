/* eslint-disable no-unused-vars */
import { useState } from "react"
import ImcTable from "./components/ImcTable"
import ImcCalc from "./components/ImcCalc"

import {data} from "./data/data"
console.log(data);


import "./components/ImcCalc.css"

import "./App.css"

const App = () => {

  const calcIMC = (e, height, weight) =>{
    e.preventDefault();

    if(!height && !weight) return;

    console.log(height);
    console.log(weight);
    
    
    const weightFloat = +weight.toString().replace(",", ".");
    const heightFloat = +height/100;
    console.log(heightFloat, weightFloat);

    const imcResult = (weightFloat/(heightFloat*heightFloat)).toFixed(1);

    setIMC(imcResult);

    data.forEach((item)=>{
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })
    if(!info) return;
    
  }

  const [imc, setIMC] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {!imc ? 
        <ImcCalc calcIMC={calcIMC} /> : 
        <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} reset={()=>{setIMC("")}}/>
      }
    </div>
  )
}

export default App