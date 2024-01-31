import React, { useEffect, useState } from 'react'
import { getHotelsThunk } from '../store/states/hotels_state'
import { useDispatch, useSelector } from 'react-redux'
import ListHotels from '../componets/HomePage/ListHotels'
import FilterName from '../componets/HomePage/FilterName'
import FilterCities from '../componets/HomePage/FilterCities'
import './style/HomePage.css'
import FilterPrice from '../componets/HomePage/FilterPrice'

const HomePage = () => {
  const [nameInput, setNameInput] = useState('')
  const [cityInput, setCityInput] = useState('all cities')
  const [fromTo, setFromTo] = useState({ from: 0, to: Infinity })

  const hotels = useSelector(states => states.hotels)

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  }, [])

  //  -----------GeneralFiltered---------------------------
  const GeneralFiltered = hotels?.results.filter(e => {

    const FilterName = e.name.toLowerCase().includes(nameInput)

    const priceHotel = +e.price
    const FilterPrice = priceHotel >= fromTo.from && priceHotel <= fromTo.to
    const filterCitie = cityInput === 'all cities' ? true : cityInput === e.city.id


    return FilterName && FilterPrice && filterCitie
  })



  return (
    <div className='HomePage'>
      <div className='HomePage_container1'>
        <h2 className='HomePage_title_fiilters'>Filters</h2>

        <FilterPrice
          setFromTo={setFromTo}
        />
        <FilterCities
          setCityInput={setCityInput}
        />
      </div>
      <div className='HomePage_FilterName'>
        <FilterName
          setNameInput={setNameInput}
          setCityInput={setCityInput}
        />
      </div>
      <div className='HomePage_container2'>
        <ListHotels
          GeneralFiltered={GeneralFiltered}
        />
      </div>
    </div>
  )
}

export default HomePage