import React from 'react'
import { useState } from 'react'


export default function Scoreboard() {
  const [playerOneWins, setplayerOneWins] = useState(2);
  const [playerTwoWins, setplayerTwoWins] = useState(3);

  const handleOnClick = () => {

  }

  
  const handleResetScoreboard = () => {
    setplayerOneWins(0);
    setplayerTwoWins(0);
  }

  return (
    <>
    <h2>Scoreboard</h2>
    <p> Player 1: {playerOneWins}</p>
    <p> Player 2: {playerTwoWins}</p>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <button type="button" class="btn btn-outline-warning" onClick={handleOnClick} > Reset Game </button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-outline-danger" onClick={handleResetScoreboard} > Reset Scoreboard </button>
      </div>
    </div>
    </>   
  )
}
