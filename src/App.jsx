import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegistrerPage from './pages/RegistrerPage'
import LoginPage from './pages/LoginPage'
import UnkownPage from './pages/UnkownPage'
import HotelInfoPage from './pages/HotelInfoPage'
import { HeaderShared } from './componets/shared/HeaderShared'
import ReservationsPage from './pages/ReservationsPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import { useState } from 'react'

function App() {

  const [activeMenuItem, setActiveMenuItem] = useState('');

  return (
    <>
      <div>
        <HeaderShared 
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegistrerPage />} />
          <Route path='/login' element={<LoginPage setActiveMenuItem={setActiveMenuItem}/>} />
          <Route path='hotel/:id' element={<HotelInfoPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/reservations' element={<ReservationsPage />} />
          </Route>
          <Route path='*' element={<UnkownPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
