import React, { useEffect } from 'react'
import usecrud from '../hooks/usecrud'
import { ReservationCard } from '../componets/ReservationsPage/ReservationCard'

const ReservationsPage = () => {

  const [reservations, getReservations,, deleteReservations] = usecrud()

  useEffect(() => {
    getReservations('/bookings')
  }, [])

  console.log(reservations);
  

  return (
    <div>
        <h2>reservations</h2>
        <div>
            {
                reservations?.map(e => (
                    <ReservationCard
                      key={e.id}
                      reserve={e}
                      deleteReservations={deleteReservations}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ReservationsPage