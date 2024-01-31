import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'

const OtherHotels = ({ cityId, hotelId }) => {

    const url = `https://hotels-api.academlo.tech/hotels?cityId=${cityId}`
    const [hotels, getHotels] = useFetch(url)



    useEffect(() => {
        cityId && getHotels()

    }, [cityId])

    return (
        <div>
            <h2>Other hotels {hotels?.results[0].city.mane}</h2>
            {
                hotels?.results.filter(e => e.id !== hotelId).map(e => (
                    <HotelCard
                        key={e.id}
                        hotel={e}
                    />
                ))
            }
        </div>
    )
}

export default OtherHotels