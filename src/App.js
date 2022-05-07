import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';

import useToken from "./useToken";
function App() {

  const { token, setToken } = useToken();

  if (!token) {

    return (
      <Router>
        <Routes>
          <Route path="/login">
            <Route
              index
              element={<Login setToken={setToken}
              />}
            />
          </Route>
        </Routes>
      </Router>
    );
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/preferences" element={<Preferences />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;