import React, { useRef } from 'react'
import './css/FilterName.css'

const FilterName = ({ setNameInput, setCityInput }) => {

    const inputSearch = useRef()

    const HandleSubmit = e => {
        e.preventDefault()
        setNameInput(inputSearch.current.value.trim().toLowerCase())
        setCityInput('all cities')
    }

    return (
        <div className='filterName'>
            <form className="Search" onSubmit={HandleSubmit}>
                <input type="text" ref={inputSearch} placeholder="Search" required />

                <div className="btn">
                    <i className="fas fa-search icon"></i>
                </div>
            </form>
            <h3 className='FilterName_Title'> ⬅ Enter hotel name</h3>
        </div>
    )
}

export default FilterName