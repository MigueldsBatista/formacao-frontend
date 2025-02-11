
const ConditionalRender = () => {

    const x = true;

  return (
    <div>
    <h3>Isso vai ser exibido?</h3>

    {x && <p>Se x for verdadeiro</p>}

    {!x && <p>Se x for falso</p>}

    <h1>Ternario </h1>
    {x ? <p>Se x for verdadeiro</p> : <p>Se x for falso</p>}

    </div>
  )
}

export default ConditionalRender