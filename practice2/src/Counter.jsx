import { useState } from "react";
import './App.css'

function Counter() {
  // let counter=5

  let [counter,setCounter]=useState(5);

  const addValue=()=>{
    setCounter(counter+1);
  }

  const subValue=()=>{
    setCounter(counter-1);
  }
  
  return (
    <>
    <h1> Hello world</h1>
    <h2> counter value :{counter}</h2>

    <button onClick={addValue}>Increase value</button>
    <button onClick={subValue}>Decrease value</button>
    </>
  )
}

export default Counter
