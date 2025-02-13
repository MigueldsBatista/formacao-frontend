import { useContext, useState } from "react"
import "./Home.css"
import {CountdownContext} from "../context/CountdownContext";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [color, setColor] = useState("#000000");
    
    const {setEvent} = useContext(CountdownContext);

    const navigate = useNavigate();

    const clearFields = ()=>{
        setTitle("");
        setDate("");
        setImage("");
        setColor("#000000");
    }

    const handleColor = (e)=>{
        setColor(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const eventObj ={
            title,
            image,
            date,
            color
        };
        console.log(color);
        
        
        navigate("/countdown");
        setEvent(eventObj);
        clearFields();
    }

  return (
    <div className="home">
        <h2>Monte sua contagem regressiva!</h2>
        <form className="countdown-form" onSubmit={handleSubmit}>
            <label htmlFor="title">Título:</label>
            <input type="text" name="title" placeholder="Digite o título do evento" 
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            required
    />

            <label htmlFor="date">Data:</label>
            <input type="date" name="date" placeholder="Digite a data do evento"
            required
            value={date}
            onChange={(e)=> setDate(e.target.value)}
            />

            <label htmlFor="image">Imagem:</label>
            <input type="text" name="image" placeholder="Digite a url da imagem de fundo"
            required
            value={image}
            onChange={(e)=> setImage(e.target.value)}
            />

            <label htmlFor="color">Cor do tema:</label>
            <input type="color" name="color"
            required
            value={color}
            onChange={(e) => handleColor(e)}
            />

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Home