// want to add a half a star, didnt render correctly.
// and possibly reflect the rating ex: 4.5 or 4 1/2


import { useState } from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import './styles.css'

export default function StarRating({numOfStars = 5}){

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex){
        // console.log(getCurrentIndex)
        setRating(getCurrentIndex)
    }

    function handleMouseMove(getCurrentIndex){
        // console.log(getCurrentIndex)
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(){
        setHover(rating)
    }

    return(
        <div>
            <h1>Star Rating</h1>
            <div className="star-rating">
                {/* The Array(numOfStars) part creates a new array with numOfStars empty slots,
                and the spread operator [...] 
                is used to convert this array-like object into a real array. */}
                {[...Array(numOfStars)].map((n, i) => (
                    i += 1,
                    <FaStar
                     className={i <= (hover || rating) ? 'active' : ''}
                     key={i} 
                     onClick={()=> handleClick(i)}
                     onMouseMove={()=> handleMouseMove(i)}
                     onMouseLeave={()=> handleMouseLeave()}
                     size={60}   
                     />
                    
                    ))}
            </div>
        </div>
    )
}