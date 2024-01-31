import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './css/FilterCities.css'

const FilterCities = ({ setCityInput }) => {


  let urlCities = 'https://hotels-api.academlo.tech/cities'
  const [cities, getCities] = useFetch(urlCities)

  useEffect(() => {
    getCities()
  }, [])


  const FilterCity = (id) => {
    setCityInput(id)
  }

  return (
    <>
      <div className='FilterCities_titleAndHr'>
        <h2 className='FilterCities_title'>Cities</h2>
        <hr className='hr' />

      </div>
      <ul className='FilterCities_list'>
        <li className='FilterCities_allCities' onClick={() => FilterCity('all cities')}>All cities</li>
        {
          cities?.map(e => (
            <button className='FilterCities_city' onClick={() => FilterCity(e.id)} key={e.id}>{e.name}</button>
          ))
        }
      </ul>
    </>
  )
}

export default FilterCities