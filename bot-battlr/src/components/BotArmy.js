import React from "react";
import BotCard from "./BotCard";

function BotArmy({botArmy, removeBot, deleteBot}) {

  console.log(botArmy)
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map((bot) => (
            <BotCard bot={bot} handleBot={removeBot} handleDeleteBot={deleteBot}/>
          ))}
          Your Bot Troops
        </div>
      </div>
    </div>
  );
}

export default BotArmy;