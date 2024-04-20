import React from 'react'
import './App.css'
function Die(props) {
  const styles={
    backgroundColor: props.isHeld ? "#59E391":"#FFFFFF"
  }
  return (
    <div >
        <button id='die' style={styles} onClick={props.holdDice}>{props.number}</button>
    </div>
  )
}

export default Die