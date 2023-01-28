import React, { useEffect, useState } from "react";
import BotArmy from "./BotArmy";
import BotCollection from "./BotCollections";

function BotsPage() {
  
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  
  useEffect(() => {
    fetch("https://api.npoint.io/250d921e0f32665a2881")
    .then (res => res.json())
    .then ((data) => setBots(data.bots));
  }, []);

console.log(bots)

  function enlistBotToArmy(bot){
    if (!botArmy.find(bot1 => bot1 === bot)){
      const listedBot = bots.find(bot1 => bot1 === bot)
      setBotArmy([...botArmy, listedBot])
    }
  }

  function removeBotFromArmy(armyBot){
    const botArmyArray = botArmy.filter((bot) => bot !== armyBot)
    setBotArmy(botArmyArray)
  }

  function deleteBotPermanently(armyBot){
    if (botArmy.find((bot) => bot === armyBot)){
      const filterBots = bots.filter(bot => bot !== armyBot)
      const filterBotArmy = botArmy.filter(bot => bot !== armyBot)
      setBots(filterBots)
      setBotArmy(filterBotArmy)

  fetch (`https://api.npoint.io/250d921e0f32665a2881${armyBot.id}`, {
    method: "DELETE"
  })
}
}

  return (
    <div>
      <BotArmy botArmy={botArmy} removeBot={removeBotFromArmy} deleteBot={deleteBotPermanently}/>
      <BotCollection bots={bots} addBot={enlistBotToArmy} deleteBot={deleteBotPermanently}/>
    </div>
  )
}

export default BotsPage;