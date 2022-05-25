import React from 'react'
import Scoreboard from './Scoreboard'

export default function Header() {
  return (
    <>
    <div class="row">

      <div class="col" style={{outline: 2}}>
        <div>
          <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>TIC TAC TOE</h2>
        </div>
      </div>
      <div class="col">
        <Scoreboard/>  
      </div>
    </div>
  
    </>
  )
}
