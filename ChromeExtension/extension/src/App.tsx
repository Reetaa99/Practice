import React from 'react';
import './App.css';
// import { DOMMessage, DOMMessageResponse } from './types';
import Timer from "./Components/Timer/Timer"
import Reminder from './Components/Reminder'
import PhotoCarousel from './Components/PhotoCarousel/PhotoCarousel';
import TotalCount from './Components/TotalCount';

function App() {

  return (
    <div className="App">
      {/* <Timer ></Timer> */}
      <Reminder></Reminder>
      <PhotoCarousel></PhotoCarousel>
      <TotalCount></TotalCount>

    </div>
  );
}

export default App;