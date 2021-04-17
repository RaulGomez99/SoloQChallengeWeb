import React, {useEffect, useState} from "react"
import {LolApi, Constants}  from 'twisted'
const api = new LolApi({key:"RGAPI-a8f0279d-deeb-433e-9952-64c05620218f"})

const SummonerItem = ({summoner:summ}) => {

  const row = () => (
    <tr>
      <td>{summ.name}</td>
      <td>{summ.iconId}</td>
      <td>{summ.league}</td>
      <td>{summ.tier}</td>
      <td>{summ.points}</td>
      <td>{summ.wins}</td>
      <td>{summ.losses}</td>
      <td>{summ.promo}</td>
    </tr>
  )

  return (
      <div>
          {summ ? row() : "No existe"}
      </div>
    );
  }
  
  export default SummonerItem;