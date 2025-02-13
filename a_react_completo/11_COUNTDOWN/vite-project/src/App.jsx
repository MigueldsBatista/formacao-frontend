import { useContext } from 'react'
import './App.css'
import NewYear from "./assets/newyear.jpg"
import { Outlet } from 'react-router-dom'
import { CountdownContext } from './context/CountdownContext'

function App() {

  // console.log(x);

  const {event} = useContext(CountdownContext);
  
  let eventImage = null;

  if(event) eventImage = event.image;

  return (
    <div className='App' style={{backgroundImage: `url(${eventImage?eventImage:NewYear})`}}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
