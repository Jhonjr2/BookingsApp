import React, { useEffect, useState } from 'react'
import usecrud from '../hooks/usecrud'
import { ReservationCard } from '../componets/ReservationsPage/ReservationCard'
import FormReviews from '../componets/ReservationsPage/FormReviews'

const ReservationsPage = () => {

  const [reservations, getReservations,, deleteReservations] = usecrud()
  const [reserveSelect, setReserveSelect] = useState()

  useEffect(() => {
    getReservations('/bookings')
  }, [])

  console.log(reservations);
  

  return (
    <div>
        <h2>reservations</h2>
        <h2>reservations</h2>
        <h2>reservations</h2>
        <h2>reservations</h2>
        <h2>reservations</h2>
        <h2>reservations</h2>
        <FormReviews
          reserveSelect={reserveSelect}
          setReserveSelect={setReserveSelect}
        />
        <div>
            {
                reservations?.map(e => (
                    <ReservationCard
                      key={e.id}
                      reserve={e}
                      deleteReservations={deleteReservations}
                      setReserveSelect={setReserveSelect}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ReservationsPage