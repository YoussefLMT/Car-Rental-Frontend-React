import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoutes from './utils/PrivateRoutes';
import Brands from './pages/Brands';
import Cars from './pages/Cars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={localStorage.getItem('token') ? <Navigate to='/dashboard' /> : <Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/cars' element={<Cars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
