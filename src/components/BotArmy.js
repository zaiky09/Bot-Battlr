import React from "react";
import BotCard from "./BotCard";

function BotArmy({botArmy, removeBot, deleteBot}) {

  console.log(botArmy)
  return (
    <div className="ui segment inverted gold bot-army">
      <div className="ui five column grid">
        
          <strong>YOUR BOTS</strong>
        
        <div className="row bot-army-row">
          {botArmy.map((bot) => (
            <BotCard bot={bot} removeBot={removeBot} deleteBot={deleteBot}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BotArmy;