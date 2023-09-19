import React,{useState} from "react";

function Sushi({sushiInfo, updatePlates, money}) {

  const [sushiEaten,setSushiEaten] = useState(false)

  function handleEatenStatus(){
    if(money>=sushiInfo.price){
      setSushiEaten(!sushiEaten);
      updatePlates(sushiInfo.price)
    }
   
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatenStatus}>
        {/* Tell me if this sushi has been eaten! */}
        {sushiEaten ? null : (
          <img
            src={sushiInfo.img_url}
            alt={`${sushiInfo.name} Sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiInfo.name} - ${sushiInfo.price}
      </h4>
    </div>
  );
}

export default Sushi;
