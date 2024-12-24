import { reportWebVitals } from 'web-vitals';
import './App.css'

import React from "react";
import Movies from "./Movies";

function App() {
  return (
    <div className="App">
      <h1 className='main-heading'>Movies Details</h1>
      <Movies />
    </div>
  );
}

export default App;
