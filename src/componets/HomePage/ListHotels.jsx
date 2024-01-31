import HotelCard from './HotelCard'
import './css/ListHotels.css'

const ListHotels = ({ GeneralFiltered}) => {

  return (
    <div className='Container_List_HotelCard'>
        {
        
          !GeneralFiltered || GeneralFiltered.length == 0 ?
          <h2>Error</h2>
          :
          GeneralFiltered?.map(e => (
            <HotelCard
              key={e.id}
              hotel={e}
            />
          ))
          
        } 
    </div>
    )
}

export default ListHotels