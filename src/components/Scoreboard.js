import React from 'react'
import { useState } from 'react'


export default function Scoreboard() {
  const [numCount, setNumCount] = useState(0);

  const handleOnClick = () => {
    setNumCount( (prev) => {
      let num = prev + 1;
      return num;
    })
    console.log(numCount);
  }

  const handleSubtract = () => {
    setNumCount( (prev) => {
      let num = prev - 1;
      return num;
    })
    console.log(numCount);
  }


  return (
    <>
    <h2>Scoreboard</h2>
    <p> Player 1: </p>
    <p> Player 2: </p>
    <p> Count: {numCount}</p>
    <button onClick={handleOnClick} > click me! </button>
    <button onClick={handleSubtract} > Subtract! </button>

    </>   
  )
}
