import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';

import useToken from "./useToken";




function App() {

  const {token, setToken} = useToken();

  if(!token) {

    return(
    <BrowserRouter>
    <Routes>

  <Route 
  path="/login" 
  element={<Login setToken={setToken}
  />} />

    
  </Routes>
  </BrowserRouter>
  );
  }

  
  return (
    <div>

    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/preferences" element={  <Preferences />}>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
