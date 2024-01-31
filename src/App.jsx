import { Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegistrerPage from './pages/RegistrerPage'
import LoginPage from './pages/LoginPage'
import UnkownPage from './pages/UnkownPage'
import HotelInfoPage from './pages/HotelInfoPage'
import { HeaderShared } from './componets/shared/HeaderShared'
import ReservationsPage from './pages/ReservationsPage'

function App() {

  return (
    <>
      <div>
    <HeaderShared/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/register' element={<RegistrerPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='hotel/:id' element={<HotelInfoPage/>} />
          <Route path='/reservations' element={<ReservationsPage/>} />
          <Route path='*' element={<UnkownPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
