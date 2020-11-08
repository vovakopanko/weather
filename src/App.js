import React from "react"
import './App.css';
import { Clock } from "./Clock/Clock";

function App() {
  return (
    <div className="App">
      <div><Clock/></div>
      <div>Weather in your City</div>
    </div>
  );
}

export default App;
