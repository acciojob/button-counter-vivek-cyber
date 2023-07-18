
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
    let [count,setcount]=useState(0)
  return (
    <div>
        <h1>Button Clicked {count} times</h1>

        <button onClick={()=>{setcount(count=>count+1)}}>Click me</button>
    </div>
  )
}

export default App
