import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiList, updatePlates, moneyLeft}) {
  
  const [currentSushi,setCurrentSushi]= useState([])
  const [remainingSushi, setRemainingSushi] = useState([])

  function updateDisplayedSushi(){
    setCurrentSushi(remainingSushi.slice(0,4))
    setRemainingSushi(remainingSushi.slice(4))
  }

  useEffect(()=>{
    setCurrentSushi(sushiList.slice(0,4))
    setRemainingSushi(sushiList.slice(4))
  },[sushiList])

  const sushiItems = currentSushi.map((sushi)=>{
    return <Sushi key={sushi.id} sushiInfo={sushi} setCurrentSushi={setCurrentSushi} updatePlates={updatePlates} money={moneyLeft}/>
  })

  return (
    <div className="belt">
      {sushiItems}
      <MoreButton updateSushi={updateDisplayedSushi}/>
    </div>
  );
}

export default SushiContainer;
