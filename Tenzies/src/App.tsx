import React from 'react';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti'
import Die from './die.tsx';

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

  function holdDice(id:any){
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
    <div className="bg-[#2b283A] h-[500px] w-[450px] mx-auto my-[80px] p-[20px]">
      <div className='text-center bg-[#F5F5F5] h-full rounded-2xl'>
        {tenzies && <Confetti />}
        <h1 className='pt-[50px] m-0'>Tenzies</h1>
        <p className='w-[300px] my-[20px] mx-auto'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='grid grid-cols-5 my-[50px] mx-[35px]'>
          {newDice}
        </div>
        <button className="bg-[#5035FF] py-[10px] px-[30px] rounded-lg text-white font-bold border-0 cursor-pointer shadow-xl w-[150px]" onClick={rollDice}>
          {tenzies? "New Game" : "Roll"}
        </button>
      </div>
    </div>
  );
}

export default App;
