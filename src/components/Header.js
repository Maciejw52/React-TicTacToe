import React from 'react'
import Scoreboard from './Scoreboard'

export default function Header({ tileSymbols, gameSymbol, setGameSymbol, score, playerScore, setPlayerScore}) {
  return (
    <>
    <div className='header'>
      <div class="row">
        <div class="col">
            <div className='gametitle'>TIC TAC TOE</div>
        </div>
        <div class="col">
          <Scoreboard tileSymbols={tileSymbols} gameSymbol={gameSymbol} setGameSymbol={setGameSymbol} score={score} playerScore={playerScore} setPlayerScore={setPlayerScore}/>  
        </div>
      </div>
    </div>  
    </>
  )
}
