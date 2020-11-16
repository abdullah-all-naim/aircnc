import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/HomePage/Home/Home';
import HotelNavigation from './Components/HotelNavigation/HotelNavigation';
import HotelList from './Components/HotelList/HotelList';
export const ClientContext = createContext()

function App() {
  const [clientsNeed, setClientsNeed] = useState({})
  return (
    <ClientContext.Provider value={[clientsNeed, setClientsNeed]}>
      <BrowserRouter>
        <Route exact path='/' component={Navigation} />
        <Route exact path='/' component={Home} />
        <Route exact path='/hotelbooking' component={HotelNavigation} />
        <Route exact path='/hotelbooking' component={HotelList} />
      </BrowserRouter>
    </ClientContext.Provider>
  );
}

export default App;
