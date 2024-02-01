import getDaysFromDates from "../../services/getDaysFromDates";
import './style/ReservationCard.css'

export const ReservationCard = ({ reserve, deleteReservations, setReserveSelect }) => {

  const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut)


  const handleDelete = () => {
    deleteReservations('/bookings', reserve.id)
  }

  const handleReviews = () => {
    setReserveSelect(reserve)
  }

  return (
    <div>
      <header>
        <img className="img" src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section>
        <h3>{reserve.hotel.name}</h3>
        <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div ><span>días de reserva: </span><span>{reservationsDays}</span></div>
        <div onClick={handleReviews} className="reservations__rating">Rate and comment this visit</div>        <button onClick={handleDelete}>Delete</button>
        <div><span>Subtotal Price: </span><span>{+reserve.hotel.price * reservationsDays}</span></div>
      </section>
    </div>
  )
}
