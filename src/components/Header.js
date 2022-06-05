import React from 'react'
import Scoreboard from './Scoreboard'

export default function Header({ tileSymbols, setGameSymbol, score, playerScore, setPlayerScore}) {
  return (
    <>
    <div class="container">
      <div class="row align-items-stretch g-0">
        <div class="col" style={{display: "flex", borderStyle: "ridge", justifyContent: "center",fontSize: "400%", fontFamily: "Courier New, Courier, monospace"}}>
          <div class="parentHeader">
            <div class="childHeader">
              <p>TIC TAC TOE</p>
            </div>
          </div>
        </div>
        <div class="col">
          <Scoreboard tileSymbols={tileSymbols} setGameSymbol={setGameSymbol} score={score} playerScore={playerScore} setPlayerScore={setPlayerScore}/>  
        </div>
      </div>
    </div>
    </>
  )
}
