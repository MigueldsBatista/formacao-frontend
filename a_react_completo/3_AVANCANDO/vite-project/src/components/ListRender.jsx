import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Matheus", "Miguel", "Jonas"]);

    const [users, setUsers] = useState([
        {id:1, nome:"Miguel", idade:19},
        {id:2, nome:"Lucas", idade:19},
        {id:3, nome:"Miguel", idade:19}
    ])

    const deleteRandom = () =>{
        const randomNum = Math.floor(Math.random()*4)
        console.log(randomNum);
        
        setUsers((prev) => {
            return prev.filter((usr) => usr.id !== randomNum);
          });
          console.log(users);
          
        
    }
  return (
<div>
    
    {list.map((item, index) => (
        <p key={index}>{item}</p>

    ))}
    <ul>
    {users.map((usr)=>(
        <li key={usr.id}>{usr.nome} - {usr.idade}</li>
        
    ))}
    </ul>

    <button onClick={deleteRandom}>Delete random</button>
    </div>
  )
}

export default ListRender