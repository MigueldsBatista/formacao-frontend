import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs'
import "./ReviewForm.css"


const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className="review-form">
        <div className="form-control score-container">

            <label className="radio-container">

                <input 
                type="radio" 
                value="unsatisfied" 
                id="review" 
                name="review" 
                required
                checked={data.review==="unsatisfied"}
                onChange={(e)=> updateFieldHandler("review", e.target.value)}
                />
                <BsFillEmojiFrownFill />
                <p>Insatisfeito</p>
            </label>
            <label className="radio-container">

                <input 
                type="radio" 
                value="neutral" 
                id="review" 
                name="review" 
                required
                checked={data.review==="neutral"}
                onChange={(e)=> updateFieldHandler("review", e.target.value)}
                
                />
                <BsFillEmojiNeutralFill />
                <p>Neutro</p>
            </label>
            <label className="radio-container">

                <input 
                type="radio" 
                value="satisfied" 
                id="review" 
                name="review" 
                required
                checked={data.review==="satisfied"}
                onChange={(e)=> updateFieldHandler("review", e.target.value)}
                />
                <BsFillEmojiSmileFill />
                <p>Satisfeito</p>
            </label>
            <label className="radio-container">

                <input 
                type="radio" 
                value="very-satisfied" 
                id="review" 
                name="review" 
                required
                checked={data.review==="very-satisfied"}
                onChange={(e)=> updateFieldHandler("review", e.target.value)}
                />
                <BsFillEmojiHeartEyesFill />
                <p>Muito satisfeito</p>
            </label>

            </div>
    <div className="form-control">
    
        <label htmlFor="comment">Comentário: </label>
        <textarea 
        name="comment" 
        id="comment" 
        placeholder='Conte como foi sua experiência.' 
        required
        onChange={(e)=> updateFieldHandler("comment", e.target.value)}
        value={data.comment}
        >
        </textarea>
    </div>

        </div>
  )
}

export default ReviewForm