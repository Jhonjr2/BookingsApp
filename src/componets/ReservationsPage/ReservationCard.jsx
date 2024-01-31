import usecrud from "../../hooks/usecrud";
import getDaysFromDates from "../../services/getDaysFromDates";
export const ReservationCard = ({reserve, deleteReservations}) => {

  const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut)


  const handleDelete = () => {
    deleteReservations('/bookings', reserve.id)
  }

  return (
    <div>
        <header>
            <img src={reserve.hotel.images[0].url} alt="" />
        </header>
        <section>
            <h3>{reserve.hotel.name}</h3>
            <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
            <div><span>reservations days: </span><span>{reservationsDays}</span></div>
            <div><span>Subtotal Price: </span><span>{+reserve.hotel.price * reservationsDays}</span></div>
            <button onClick={handleDelete}>Delete</button>
        </section>
    </div>
  )
}
