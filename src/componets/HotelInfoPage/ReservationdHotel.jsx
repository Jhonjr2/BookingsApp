import React from 'react'
import { useForm } from 'react-hook-form'
import usecrud from '../../hooks/usecrud'
import './style/ReservationdHotel.css'

const ReservationdHotel = ({ hotelId }) => {

  const { handleSubmit, register, reset } = useForm()

  const [, , createReservation] = usecrud()

  const submit = data => {
    const obj = {
      ...data,
      hotelId
    }
    createReservation('/bookings', obj)
  }

  return (
    <div className='ReservationsHotel'>
      <h3 className='ReservationsHotel_title'>Reservations</h3>
      <form className='ReservationsHotel_form' onSubmit={handleSubmit(submit)}>
        <div className='label_container'>
          <label className='ReservationsHotel_label'>
            <span className='ReservationsHotel_ckeck'>Check-in</span>
            <input className='ReservationsHotel_input' {...register('checkIn')} type="date" />
          </label>
          <label className='ReservationsHotel_label2'>
            <span className='ReservationsHotel_ckeck'>Check-out</span>
            <input className='ReservationsHotel_input' {...register('checkOut')} type="date" />
          </label>
        </div>
        <select defaultValue={'Huesped'} className='select' name="" id="">
          <option value="0">Huesped</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">3</option>
        </select>
        <button className='ReservationsHotel_btn'>Submit</button>
        <div className='adicional_reserve'>
          <h3>No se hará ningún cargo por el momento</h3>
        </div>
      </form>
    </div>

  )
}

export default ReservationdHotel