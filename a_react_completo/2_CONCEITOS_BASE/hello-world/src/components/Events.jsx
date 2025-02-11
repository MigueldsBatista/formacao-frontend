const Events = () => {
    const handleClick = (e)=>{
        console.log(e);
        
        console.log("clicouu");
        
    }

    const renderSomething = (x) =>{
        if(x) return <h1>Renderizando isso</h1>

        return <h1>Renderizando outra coisa</h1>
    }

  return (
    <div>
    <button onClick={handleClick}>Clique em mim</button>
    {renderSomething(false)}
    </div>
  )
}

export default Events