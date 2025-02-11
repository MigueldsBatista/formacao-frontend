import { useParams } from 'react-router-dom'

const ProductInfo = () => {
    const {id} = useParams();
    


  return (
    <div>
        <h1>Mais sobre o produto {id}</h1>
    </div>
  )
}

export default ProductInfo