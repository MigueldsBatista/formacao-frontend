/* eslint-disable react/jsx-no-undef */
import { BsFillEmojiFrownFill, BsFillEmojiHeartEyesFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill } from "react-icons/bs"
import "./Thanks.css"

const Thanks = ({data}) => {

  const emojiData = {
  unsatisfied: <BsFillEmojiHeartEyesFill/>,
  neutral:<BsFillEmojiSmileFill/>,
  satisfied:<BsFillEmojiNeutralFill/>,
  verySatisfied:<BsFillEmojiFrownFill/>  
  }

  return (
    <div className="thanks-container">
    <h2>Falta pouco...</h2>
    <p>Sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para sua próxima compra.</p>
    <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
    <h3>Aqui está o resumo da sua avaliação</h3>
    <p className="review-data">
    <span>Satisfação com o produto: </span>
    {emojiData[data.review]}
    </p>
    <p className="review-data">
    <span>Comentário: </span>
    {data.comment}
    </p>

    </div>
  )
}

export default Thanks