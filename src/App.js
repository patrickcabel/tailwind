import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';

import useToken from "./useToken";

function App() {

  const AuthLayout = () => {
    const { token, setToken } = useToken();
    const location = useLocation();
    return token
      ? <Outlet />
      : <Navigate to="/login" replace state={{ from: location }} />
  }

  const AnonymousLayout = () => {

    const { token } = useToken();
    return token

      ? <Navigate to="/" replace />
      : <Outlet />
  }

  return (
    <Router>
      <Routes>
        <Route element={<AnonymousLayout />}>
          <Route path="/login" element={<Login setToken={useToken} />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;