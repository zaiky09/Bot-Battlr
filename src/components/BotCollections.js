import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, addBot, deleteBot}) {

    const botsMap = bots.map(
        (bot) => 
        <BotCard key={bots.id}
                 bot={bot}   
                 addBot={addBot}
                 deleteBot={deleteBot}   
            />
    )

  return (
    <div className="ui four column grid">
      <strong>ALL BOTS</strong>
      <div className="row">
        {botsMap}    
      </div>
    </div>
  );
}

export default BotCollection;