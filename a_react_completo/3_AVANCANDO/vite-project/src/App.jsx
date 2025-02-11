import "./App.css"
import ListRender from "./components/ListRender"
import night from "./assets/night.jpg"
import Data from "./components/Data"
import ConditionalRender from "./components/ConditionalRender"
import ShowUsername from "./components/ShowUsername"
import ShowCar from "./components/ShowCar"
import Fragment from "./components/Fragment"
import Container from "./components/Container"
import ExecuteFunction from "./components/ExecuteFunction"
import { useState } from "react"
import Message from "./components/Message"
import ChangeMessage from "./components/ChangeMessage"
const App = () => {

  const [message, setMessage] = useState("Esta");

  const handleMessage = (msg) =>{
    setMessage(msg);
  }

  const cars =[
    {id:1, brand:"fiat", model:"uno"},
    {id:2, brand:"ford", model:"ka"},
    {id:3, brand:"chevrolet", model:"tracker"},
  ]

  return (
    <div style={{paddingBottom: "500px"}}>

    {/*Imagem em public */}

    <p>Imagem do dia</p>
    <img src="/img.jpg" alt="Alguma imagem" />

    {/* Imagem em assets que são como componentes
      Acaba sendo uma melhor prática pois usamos ela como componente
      */}

      <p>Imagem da noite</p>
      <img src={night} alt="Imagem da noite" />

      <Data></Data>

      <ListRender></ListRender>

      <ConditionalRender></ConditionalRender>


      {/* props */}

      
      <ShowUsername name="miguel" age={19} email="msb"></ShowUsername>

      <ShowUsername name="Yasmin" age={17} email="yps"></ShowUsername>

      <h3>Carros no sistema</h3>

      {cars.map((c)=>(
    <ShowCar
     key={c.id}
     brand={c.brand} 
     model={c.model} 
     id={c.id}>
     </ShowCar>
      ))
    }

    <Fragment>
    
    </Fragment>


    {/*Containers e children prop */}

    <Container>
    <p>Alguma coisa</p>
    </Container>

    <ExecuteFunction>
    {console.log("Evento disparado")}
    </ExecuteFunction>

    {/* State lift */}

    <Message msg={message}></Message>

    <ChangeMessage handleMessage={handleMessage}></ChangeMessage>
    </div>
  )
}

export default App