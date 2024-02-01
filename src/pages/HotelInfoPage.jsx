import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import OtherHotels from '../componets/HotelInfoPage/OtherHotels'
import ReservationdHotel from '../componets/HotelInfoPage/ReservationdHotel'
import './style/HotelInfoPage.css'
import CommentsSection from '../componets/HotelInfoPage/CommentsSection'


const HotelInfoPage = () => {

    const { id } = useParams()

    const url = `https://hotels-api.academlo.tech/hotels/${id}`
    const [hotel, getHotel] = useFetch(url)

    useEffect(() => {
        getHotel()
    }, [url])


    return (
        <div className='HotelInfoPage'>
            <header className='HotelInfoPage_header'>
                <h2 className='HotelInfoPage_Hotel_name'>{hotel?.name}</h2>
                <span className='HotelInfoPage_rating'>rating</span>
            </header>
            <div className='HotelInfoPage_imags'>
                <img className='HotelInfoPage_img1' src={hotel?.images[0].url} alt="" />
                <div className='HotelInforPage_Container_img'>
                    <img className='HotelInfoPage_img2' src={hotel?.images[1].url} alt="" />
                    <img className='HotelInfoPage_img3' src={hotel?.images[3].url} alt="" />
                    <img className='HotelInfoPage_img4' src={hotel?.images[4].url} alt="" />
                    <img className='HotelInfoPage_img5' src={hotel?.images[5].url} alt="" />
                </div>
            </div>
            <CommentsSection
                hotelId={hotel?.id}
            />
            <div className='HotelInfoPage_ResevationHotel'>
                <ReservationdHotel
                    hotelId={hotel?.id}
                />
            </div>
            <div className='HotelInfoPage_'>
                <div className='HotelInfoPage_'>
                    <span className='HotelInfoPage_'>{hotel?.city.name}</span>
                    <span className='HotelInfoPage_'>{hotel?.city.country}</span>
                </div>
                <div className='HotelInfoPage_'>
                    <i className='bx bx-map'></i>
                    <span className='HotelInfoPage_'>{hotel?.address}</span>
                </div>
                <p>{hotel?.description}</p>
            </div>
            <div className='HotelInfoPage_Map'>
                <h2 className='title_map'>A dónde irás</h2>
                {
                    hotel && (

                        <Map defaultCenter={[+hotel.lat, +hotel.lon]} height={480} zoom={13} >
                            <Marker
                                width={50}
                                color='#34a356'
                                anchor={[Number(hotel.lat), +hotel.lon]}
                            />
                            <ZoomControl />
                        </Map>
                    )
                }
            </div>
            <OtherHotels
                cityId={hotel?.city.id}
                hotelId={hotel?.id}
            />

        </div>
    )
}

export default HotelInfoPage