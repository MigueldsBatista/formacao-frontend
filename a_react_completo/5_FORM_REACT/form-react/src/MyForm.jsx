import { useState } from "react"
import "./MyForm.css"


// eslint-disable-next-line react/prop-types
const MyForm = ({username, userEmail, userDetails}) => {

    const [name, setName] = useState(username);
    const [email, setEmail] = useState(userEmail);
    const [descricao, setDescricao] = useState(userDetails);
    const [role, setRole] = useState();
    const handleName =(e)=>{
        setName(e.target.value);
        console.log(name);
    }
    const handleDescricao =(e)=>{
        setDescricao(e.target.value);
        console.log(descricao);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !email){
            alert("Preencha todos os campos do formulário!"); return;
        }
        alert("Formulário enviado com sucesso!")
        clearForm();
    }

    const clearForm = ()=>{
        setEmail("");
        setName("");
        setDescricao("");
    }

    const handleRole = (e)=>{
        setRole(e.target.value);
        console.log(role);
        
    }
  return (
    <div>

    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="name">Nome</label>
    <input 
    type="text" 
    name="name" 
    placeholder="Digite o seu nome"
    onChange={(handleName)}
    value={name}
    />
    </div>
    
    {/*Label envolvendo input */}
    
    <label>
    <span>E-mail:</span>
    <input 
    type="text" 
    name="email" 
    placeholder="Digite o seu email" 
    onChange={(e)=> setEmail(e.target.value)}
    value={email}
    />
    </label>
    <p>{email}</p>
    <input type="submit" value="Enviar"
    />

    <label>
    <textarea 
    name="descricao" 
    id="descricao" 
    placeholder="Fale mais sobre você"
    onChange={handleDescricao}
    ></textarea>
    </label>

    <label htmlFor="">
    <select name="role" id="role" onChange={handleRole}>
    <option value="empty">Selecione um valor</option>
    <option value="ADMIN">Administrador</option>
    <option value="USUARIO">Usuario</option>
    <option value="EDITOR">Editor</option>
    </select>
    </label>
    </form>

    </div>
  )
}

export default MyForm