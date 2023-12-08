import './App.css';
import React, { useState, useEffect} from 'react';
import {Homepage} from './Components/Homepage'
import {NavBar} from './Components/NavBar'
import {TimeSlotList} from './Components/CalendarDisplay'
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

//////////////////////////////////////////////////////////////////////
/*
App is our manager basically. It calls our Homepage component and is the Hub for 
adding a footer and also adding a navigation bar.
*/
 /////////////////////////////////////////////////////////////////////
/*

<Route path='/cats' component={Cats} />
      <Route path='/sheeps' component={Sheeps} />
      <Route path='/goats' component={Goats} />
*/

 function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
      <Route path='/'element={<Homepage/>} />
      <Route path='/calendar'element={<TimeSlotList/>}/>
    </Routes>
  </Router>
  );
}

export default App;
