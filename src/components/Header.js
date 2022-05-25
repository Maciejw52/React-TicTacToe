import React from 'react'
import Scoreboard from './Scoreboard'

export default function Header() {
  return (
    <>
    <div class="row">

      <div class="col" >
        <div class="align-middle">TIC TAC TOE</div>
      </div>
      <div class="col">
        <Scoreboard/>  
      </div>
    </div>
  
    </>
  )
}
