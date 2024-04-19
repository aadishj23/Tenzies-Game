import React from 'react';
import './App.css';
import Die from './die';
function App() {
  const [dice,setDice]= React.useState(handleClick())
  function handleClick(){
    let newArr=[]
    for(let i=0;i<10;i++){
      newArr.push((Math.floor((Math.random())*6) +1))
    }
    return newArr
  }
  const newDice=dice.map(die => {
    return(
      <Die number={die} />
    )
  })
  function rollDice(){
    return(
      setDice(handleClick())
    )
  }
  return (
    <div className="App">
      <div className='container'>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-area'>
          {newDice}
        </div>
        <button id='btn' onClick={rollDice}> New Game</button>
      </div>
    </div>
  );
}

export default App;
