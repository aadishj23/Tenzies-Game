import React from 'react'
import './App.css'
function Die(props) {
  return (
    <div>
        <button id='die'>{props.number}</button>
    </div>
  )
}

export default Die