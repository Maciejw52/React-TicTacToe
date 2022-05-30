import React from 'react'

export default function Scoreboard({ tileSymbols, gameSymbol, setGameSymbol, score, playerScore, setPlayerScore}) {
  
  const handleResetGame = () => {
    setGameSymbol(tileSymbols);
  }
  
  const handleResetScoreboard = () => {
    setPlayerScore(score);
  }

  return (
    <>
    <h2 className='scoreboard'>SCOREBOARD</h2>
    <p className='scoreboard'> Player 1: {playerScore[1]}</p>
    <p className='scoreboard'> Player 2: {playerScore[2]}</p>
    <div class="row">
    <div class="col"></div>
      <div class="col" >
        <button type="button" class="btn btn-light" onClick={handleResetGame} > Reset Game </button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-light" onClick={handleResetScoreboard} > Reset Scoreboard </button>
      </div>
      <div class="col"></div>
    </div>
    </>   
  )
}
