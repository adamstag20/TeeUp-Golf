import './App.css';
import React, { useState, useEffect} from 'react';
import {Homepage} from './Components/Homepage'

//////////////////////////////////////////////////////////////////////
/*
App is our manager basically. It calls our Homepage component and is the Hub for 
adding a footer and also adding a navigation bar.
*/
 /////////////////////////////////////////////////////////////////////


 function App() {
  return (
    <div className="App">
      <Homepage/>
     
    </div>
  );
}

export default App;
