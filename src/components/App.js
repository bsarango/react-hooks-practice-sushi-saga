import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList,setSushiList] = useState([])
  const [emptyPlates, setEmptyPlates] = useState([])
  const [moneyLeft,setMoneyLeft]=useState(100)

  function updatePlates(sushiPrice){
    const updatedPlateArray = [...emptyPlates,"plate"]
    setEmptyPlates(updatedPlateArray)
    setMoneyLeft(moneyLeft-sushiPrice)
  } 

  useEffect(()=>{
    fetch(API)
    .then(resp=>resp.json())
    .then(sushis=>setSushiList(sushis))
  },[])

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} updatePlates={updatePlates} moneyLeft={moneyLeft}/>
      <Table plates={emptyPlates} money={moneyLeft}/>
    </div>
  );
}

export default App;
