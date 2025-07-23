import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Private from './pages/Private';
import { authContext } from './context/useContext';


const App = () => {
  const { user } = useContext(authContext);

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/private'
          element={user ? <Private /> : <Navigate to='/login' />}
        />
      </Routes>
    </div>
  );
};

export default App;
