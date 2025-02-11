import { Link, useParams } from "react-router-dom"

import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const {id} = useParams();//pega da url

    const url = "http://localhost:3000/products/"+id
    const {data:product} = useFetch(url);
    if(!product) return <p>Carregando ...</p>

  return (
    <div>
    <p>ID do produto: {id}</p>
    <div>
        {product.name}
        {product.price}
        <Link to={`/products/${product.id}/info`}>Mais</Link>
    </div>
    </div>
  )
}

export default Product