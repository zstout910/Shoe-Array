import './App.css';
import React, { useState } from 'react';
import ShoeList from './ShoeList';
import ShoeColor from './ShoeColor';

function App() {
  const [counter, setCounter] = useState(''); //counter created in class
  const [selectedColor, setSelectedColor] = useState(""); //use state to get Shoe Color

  function increment(event) {
    setCounter(event.target.value);  //counter created in class
  }

  function handleColorChange(color) {
    setSelectedColor(color);          //changes to selected color
  }

  return (                                        
    <div className="App">
      <input type="text" onChange={increment} value={counter} />
      <h1>{counter}</h1>
      <ShoeList onColorChange={handleColorChange} />
      <ShoeColor color={selectedColor} />
    </div>                //gets ShoeList and when clicked displays color
  );                      //Gets ShoeColor and displays selectedColor next to it
}

export default App;
