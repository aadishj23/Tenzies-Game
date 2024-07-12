function Die(props:any) {
  const styles={
    backgroundColor: props.isHeld ? "#59E391":"#FFFFFF"
  }
  return (
    <div >
        <button className="py-[5px] px-[10px] font-bold shadow-xl text-2xl m-[10px] cursor-pointer rounded-md bg-white" style={styles} onClick={props.holdDice}>{props.number}</button>
    </div>
  )
}

export default Die