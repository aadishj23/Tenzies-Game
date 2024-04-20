import React from 'react';
import './App.css';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti'
import Die from './die';
function App() {
  const [dice,setDice]= React.useState(handleClick())
  const [tenzies,setTenzies]= React.useState(false)

  React.useEffect(() => {
    const allHeld= dice.every( die => die.isHeld)
    const firstValue= dice[0].number
    const allSameValue= dice.every(die => die.number === firstValue)
    if (allHeld && allSameValue){
      setTenzies(true)
    }
  },[dice])
  function generateNewDie(){
    return({
      number: (Math.floor((Math.random())*6) +1),
      id: nanoid(),
      isHeld: false
  })
  }
  function handleClick(){
    let newArr=[]
    for(let i=0;i<10;i++){
      newArr.push(generateNewDie())
    }
    return newArr
  }

  function holdDice(id){
    console.log(id)
    setDice(prevDice => prevDice.map(die => {
        return die.id === id ? 
          {...die, isHeld: !die.isHeld} : die
      }
    ))
  }
  const newDice=dice.map(die => {
    return(
      <Die 
        key={die.id} 
        number={die.number} 
        isHeld={die.isHeld} 
        holdDice={() => holdDice(die.id)}/>
    )
  })

  function rollDice(){
    if(!tenzies){
      return(
        setDice(prevDice => prevDice.map(
          die => {  
            return( 
              die.isHeld ? die : generateNewDie()
            )
          }
        ))
      )
    }
    else{
      setTenzies(false)
      setDice(handleClick())
    }
  }
  return (
    <div className="App">
      <div className='container'>
        {tenzies && <Confetti />}
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='dice-area'>
          {newDice}
        </div>
        <button id='btn' onClick={rollDice}>
          {tenzies? "New Game" : "Roll"}
        </button>
      </div>
    </div>
  );
}

export default App;
