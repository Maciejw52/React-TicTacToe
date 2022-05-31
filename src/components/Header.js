import React from 'react'
import Scoreboard from './Scoreboard'

export default function Header({ tileSymbols, gameSymbol, setGameSymbol, score, playerScore, setPlayerScore}) {
  return (
    <>
    <div class="row">

      <div class="col" style={{outline: 2}}>
        <div>
          <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh', fontFamily : "Courier New", fontWeight : "bolder", fontSize : 50}}>TIC TAC TOE</h2>
        </div>
      </div>
      <div class="col">
        <Scoreboard tileSymbols={tileSymbols} gameSymbol={gameSymbol} setGameSymbol={setGameSymbol} score={score} playerScore={playerScore} setPlayerScore={setPlayerScore}/>  
      </div>
    </div>
  
    </>
  )
}
