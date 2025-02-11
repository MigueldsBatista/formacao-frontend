const templateExpression = () =>{
    const name = "Miguel"
    const car = {
        name:"meu filho",
        model:"ka",
        brand:"ford"
    }
    return (
        <div>
        <h1>Minha variável {2+2}</h1>
        <h2>Bem vindo {name}</h2>

        <p>{car.name}</p>
        <p>{car.brand}</p>
        <p>{car.model}</p>
        </div>
    )
}

export default templateExpression