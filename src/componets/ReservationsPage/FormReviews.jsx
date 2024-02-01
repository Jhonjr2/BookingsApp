import { useForm } from "react-hook-form"
import usecrud from "../../hooks/usecrud"

const FormReviews = ({ reserveSelect, setReserveSelect }) => {

    const { handleSubmit, register, reset } = useForm()

    const [, , createReview] = usecrud()

    const submit = data => {
        const obj = {
            ...data,
            hotelId: reserveSelect?.hotelId,
            rating: +data.rating
        }

        createReview('/reviews', obj)
        reset({
            rating: "5",
            comment: ''
        })
        setReserveSelect()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h3>Form Reviews</h3>
                <label>
                    <span>Rating</span>
                    <select {...register('rating')}>
                        <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
                        <option value="4">⭐️⭐️⭐️⭐️</option>
                        <option value="3">⭐️⭐️⭐️</option>
                        <option value="2">⭐️⭐️</option>
                        <option value="1">⭐️</option>
                    </select>
                </label>
                <label>
                    <span>Comments</span>
                    <textarea {...register('comment')}></textarea>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormReviews