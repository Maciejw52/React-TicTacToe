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
    <div className='scoreboard'>
      <h2 style={{font: "Courier New"}}>SCOREBOARD</h2>
      <p> Player 1: {playerScore[1]}</p>
      <p> Player 2: {playerScore[2]}</p>
      <div class="row">
      <div class="col"></div>
        <div class="col" >
          <button type="button" class="btn btn-light" style={{whiteSpace: "nowrap"}} onClick={handleResetGame} > Reset Game </button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-light" style={{whiteSpace: "nowrap"}} onClick={handleResetScoreboard} > Reset Scoreboard </button>
        </div>
        <div class="col"></div>
      </div>
    </div>

    </>   
  )
}
