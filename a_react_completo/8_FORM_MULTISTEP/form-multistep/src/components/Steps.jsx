/* eslint-disable react/prop-types */
import "./Steps.css"
import {AiOutlineUser,AiOutlineStar, AiOutlineSend} from 'react-icons/ai'

const Steps = ({currentStep}) => {
  return (
    <div className="steps">

        <div className="step active">
            <AiOutlineUser />
            <p>Identificação</p>
        </div>
        
        <div className={`step ${currentStep>=1?"active":""}`}>
            <AiOutlineStar />
            <p>Avaliação</p>
        </div>

        <div className={`step rotate ${currentStep>=2?"active":""}`}>
            <AiOutlineSend />
            <p>Envio</p>
        </div>

    </div>
  )
}

export default Steps