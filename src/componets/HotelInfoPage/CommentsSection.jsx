import { useEffect } from "react"
import usecrud from "../../hooks/usecrud"

const CommentsSection = ({ hotelId }) => {

    const [reviews, getReviews] = usecrud()

    useEffect(() => {
        if (hotelId) {
            getReviews(`/reviews?hotelId=${hotelId}`)
        }
    }, [hotelId])

    console.log(reviews);

    return (
        <div>
            {
                reviews?.map(e => (
                    <div key={e.id}>
                        <div>{e.rating}⭐️</div>
                        <p>{e.comment}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CommentsSection