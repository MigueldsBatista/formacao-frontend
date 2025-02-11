import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch';
import PopUp from './components/PopUp';

const url = "http://localhost:3000/products"

function App() {
  
  // const [products, setProducts] = useState([]);

  const {data:items , httpConfig, loading, error} = useFetch(url);

  
  // useEffect(()=>{
  //   async function getData (){
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProducts(data)
  //   }
  //   getData();
  // },[]);


  function clearForm (){
    setName("");
    setPrice("");
  }

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit  = async (e) =>{
    e.preventDefault();

    if(!name || !price) return;

    const product ={
      name,
      price
    }

    httpConfig(product, "POST");

    // const response = await fetch(url, {
    //   method:"POST",
    //   headers: {
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // const added = await response.json();
    // console.log(added);
    // setProducts((current)=> [...current, added])

    clearForm();


  }


  
  return (
    <>
    <h1>HTTP em React</h1>
    {loading && <p>Carregando...</p>}
    {error && <p>ERRO {error}</p>}
    
    <ul>
    {items && items.map((p)=>(
      <li key={p.id}>{p.name} - R$ {p.price} </li>
    ))}
    </ul>
    
    <div className="add-product">
    
      <form onSubmit={handleSubmit}>
        <label>
        <span>Nome</span>
          <input 
          type="text" 
          name="name" 
          id="name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
          />
        </label>
        <label>
        <span>Preço</span>
          <input 
          type="text" 
          name="price" 
          id="price"
          value={price}
          onChange={(e)=> setPrice(e.target.value)}
          />
        </label>

      {loading ? (
        <>
        <input type='submit' disabled value="Aguarde..." />
        <PopUp/>
        </>

      ) : (
        <input type="submit" value="Enviar" />
      )}
      </form>


    </div>

    </>
  )
}

export default App
