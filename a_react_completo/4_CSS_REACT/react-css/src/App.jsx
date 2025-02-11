import "./MyComponent.css"
import './App.css'
import MyComponent from './MyComponent'
import Title from "./Title";

function App() {

const n = 11;
const redTitle = true;

  return (
    <div className='App'>
    <h1>CSS no react</h1>


    <MyComponent></MyComponent>

    <p>Css vazouuu</p>

    <p style={
      {
        color: "blue", 
        backgroundColor:"#ddd", 
        marginTop:"30px"
      }
    }>Inline style</p>

    <h2 style={
     n >10 ? {color:"red"} : {color:"lightgreen"}

    }>Css dinâmico</h2>

    {/* Classes dinamicas */}

    <h2 className={redTitle?"red-title":"title"}>Titulo dinamico</h2>

    <Title></Title>
    </div>
  )
}

export default App
