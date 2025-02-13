import "./Counter.css"

const Counter = ({title, number, eventColor}) => {
  return (
    <div className="counter">
    <p className="counter-number" style={{backgroundColor:eventColor?eventColor:"black"}}>{number}</p>
        <h3 className="counter-text" style={{color:eventColor?eventColor:"black"}}>{title}</h3>
    </div>
  )
}

export default Counter