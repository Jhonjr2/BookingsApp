import { useNavigate } from "react-router-dom"
import '../HomePage/css/HotelCard.css'


const HotelCard = ({ hotel }) => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/hotel/${hotel.id}`)
  }

  return (
    <article className="hotelCard">
      <div className="Container_HotelCard">
        <header className="hotelCard_header">
          <img className="hotelCard_img" src={hotel.images[0].url} alt="" />
        </header>
        <section className="hotelCard_info_container">
          <h3 className="hotelCard_name">{hotel.name}</h3>
            <span className="hotelCard_rating">🎖🎖🎖🎖🎖 Rating</span>
            <p className="hotelCard_name_city">{hotel.city.name}, {hotel.city.country}</p>
            <div className="hotelCard_price">$ {hotel.price}</div>
          <div className="hotelCard_container_btn">
            <button className="hotelCard_btn" onClick={handleNavigate}>See more...</button>
          </div>
        </section>
      </div>
    </article>
  )
}

export default HotelCard