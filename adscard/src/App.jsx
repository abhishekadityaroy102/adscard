import { useState } from 'react';
import Carddiv from './components/Carddiv';
import data from "./components/data.json";

// import "./App.css"
function App() {
  

  return (
    <div className="App">
     <Carddiv data={data}/>
    </div>
  )
}

export default App
