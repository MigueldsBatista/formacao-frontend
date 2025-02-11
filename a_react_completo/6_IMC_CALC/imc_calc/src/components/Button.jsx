/* eslint-disable react/prop-types */
import "./Button.css"




const Button = ({id, text, onClick}) => {

  const handleAction = (e) =>{
    onClick(e)
  }

  return (
    <button onClick={handleAction} id={id}>{text}</button>
  )
}

export default Button