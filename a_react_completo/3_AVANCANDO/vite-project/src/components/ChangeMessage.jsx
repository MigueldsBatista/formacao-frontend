

const ChangeMessage = ({handleMessage}) => {
    const messages = ["Oii", "ola", "Td bem", "Hello"]

  return (
    <div>
    {/* Usamos essa sintaxe de arrow function quando temos parametros na função */}
    <button onClick={()=> handleMessage(messages[0])}>1</button>
    <button onClick={()=> handleMessage(messages[1])}>2</button>
    <button onClick={()=> handleMessage(messages[2])}>3</button>
    
    </div>
  )

  
}

export default ChangeMessage