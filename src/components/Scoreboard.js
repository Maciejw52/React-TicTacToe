import React from 'react'
import { useState } from 'react'

export default function Scoreboard({ tileSymbols, gameSymbol, setGameSymbol }) {
  const [playerOneWins, setplayerOneWins] = useState(2);
  const [playerTwoWins, setplayerTwoWins] = useState(3);

  const handleResetGame = () => {
    setGameSymbol(tileSymbols);
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
        <button type="button" class="btn btn-light" onClick={handleResetGame} > Reset Game </button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-light" onClick={handleResetScoreboard} > Reset Scoreboard </button>
      </div>
    </div>
    </>   
  )
}
