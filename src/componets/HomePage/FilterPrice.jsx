import React from 'react'
import { useForm } from 'react-hook-form'
import './css/FilterPrice.css'

const FilterPrice = ({ setFromTo }) => {

  const { handleSubmit, register, reset } = useForm()
  const submit = data => {
    const obj = {
      from: data.from == 0 ? 0 : data.from,
      to: data.from == 0 ? Infinity : data.to
    }
    setFromTo(obj)
  }

  return (
    <div className='FilterPrice'>
      <div className='titleAndhr'>
        <h3 className='FilterPrice_title'>Price</h3>
        <hr className='hr' />
      </div>
      <form className='FilterPrice_form' onSubmit={handleSubmit(submit)}>
        <label className='FilterPrice_label'>
          <span className='FilterPrice_label_title'>From</span>
          <input className='FilterPrice_input' {...register('from')} type="number" />
        </label>
        <label className='FilterPrice_label'>
          <span className='FilterPrice_label_title'>To</span>
          <input className='FilterPrice_input' {...register('to')} type="number" />
        </label>
        <button className='FilterPrice_btn'>Apply</button>
      </form>

    </div>
  )
}

export default FilterPrice