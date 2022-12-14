import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoutes from './utils/PrivateRoutes';
import Brands from './pages/Brands';
import Cars from './pages/Cars';
import UpdateCar from './pages/UpdateCar';
import Reservations from './pages/Reservations';
import UpdateReservation from './pages/UpdateReservation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={localStorage.getItem('token') ? <Navigate to='/dashboard' /> : <Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='cars/update-car/:id' element={<UpdateCar />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='reservations/update-reservation/:id' element={<UpdateReservation />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
