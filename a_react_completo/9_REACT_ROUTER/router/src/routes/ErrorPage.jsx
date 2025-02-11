import { useRouteError } from "react-router-dom"

const Contact = () => {
    const error = useRouteError();
    return (

      <div>
      <h1>Ops!</h1>
      <p>Temos um problema!</p>
      <p>{error.statusText} {error.status}</p>
      <p>{error.error.message}</p>
      </div>
    )
  }
  
  export default Contact