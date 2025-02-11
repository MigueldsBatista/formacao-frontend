import { useState } from "react";



const Data = () => {


const [anotherNum, setAnotherNum] = useState(15);

return (
    <div>{anotherNum}
    {/* Nao altera */}
    <button onClick={()=>setAnotherNum(anotherNum+1)}></button>
    </div>
  )
}

export default Data