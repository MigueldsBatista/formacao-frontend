
const ShowCar = ({id, brand, model}) => {
  return (
      <div key={id}>

      <p>Marca: {brand}</p>
      <p>Modelo: {model}</p>

    </div>
  )
}

export default ShowCar