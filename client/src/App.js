import React, {useState, useEffect} from "react"
import './App.css';
import SumonnerItem from '../src/Components/SummonerItem/summoneritem.component'
import { Table, Avatar } from 'antd';
import 'antd/dist/antd.css';
import { CheckCircleTwoTone , CloseCircleTwoTone, QuestionCircleOutlined} from '@ant-design/icons';
const summonersNames = [
  "R3X PamelaChu", "R3X pORNNhub ", "Svrlsvpb", "mitulaEZREAL","R3X VirginMaster", "Calyscxn", "Maz3pin",
  "R3X DJ Cobra", "egnqs", "AlejosDeCarglass", "R3X peloypito", "R3X SocioDeVOX", "labandaestabo3"
]
const ligas = ["CHALLENGER", "MASTER", "DIAMOND", "PLATINUM", "GOLD", "SILVER", "BRONZE", "IRON", "UNRANKED"]

const App = () => {
  const transform = tier => {
    if(tier == "I") return 1
    if(tier == "II") return 2
    if(tier == "III") return 3
    if(tier == "IV") return 4
  }
  const ordenacion = (a, b) => ((a.name.toLowerCase().charCodeAt(0) - 97) - (b.name.toLowerCase().charCodeAt(0) - 97))

  const transformPromo = str => {
    const separate = str.split("")
    return (<span>
      {separate.map(a=>transformGame(a))}&nbsp;
    </span>)
  }
  const transformGame = letter => {
    if(letter=="L") return <CloseCircleTwoTone twoToneColor = "#FE2E2E"/>
    if(letter=="W") return <CheckCircleTwoTone  twoToneColor = "#52c41a"/>
    if(letter=="N") return <QuestionCircleOutlined />
  }
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <span><Avatar src = {`https://opgg-static.akamaized.net/images/profile_icons/profileIcon${record.iconId}.jpg?image=q_auto:best&v=1518361200`} /> <a href={`https://euw.op.gg/summoner/userName=${text}`} target = "_blank">{text}</a> {record.level} </span>
      ),
      sorter: (a, b) =>((a.name.toLowerCase().charCodeAt(0) - 97) - (b.name.toLowerCase().charCodeAt(0) - 97))
    },
    //
    {
      title: 'Liga',
      dataIndex: 'league',
      key: 'league',
      render: (text, record) => (
        <span>
          {text != "UNRANKED" ?
            <span>
              <Avatar src = {`https://opgg-static.akamaized.net/images/medals/${text.toLowerCase()}_${transform(record.tier)}.png?image=q_auto:best&v=1`} /> 
              {text} {record.tier} ({record.points}pts) {record.promo ? transformPromo(record.promo.progress): ""}
            </span>
            : 
            <span>
              <Avatar src = {`https://opgg-static.akamaized.net/images/medals/default.png?image=q_auto:best&v=1`} /> 
              {text}
            </span>
          }
        </span>
      ),
      sorter: (summon1, summon2) => {
        let num1 = ((8-ligas.indexOf(summon1.league))*10 - transform(summon1.tier) || 0) * 100 + summon1.points || 0
        let num2 = ((8-ligas.indexOf(summon2.league))*10 - transform(summon2.tier) || 0) * 100 + summon2.points || 0
        console.log(num1, summon1.name)
        return num2 - num1
      }
    },
    {
      title: 'Victorias',
      dataIndex: 'wins',
      key: 'wins',
      sorter:(a,b) => (b.wins - a.wins)
    },
    {
      title: 'Derrotas',
      dataIndex: 'losses',
      key: 'losses',
      sorter:(a,b) => (b.losses - a.losses)
    },
    {
      title: "Win Rate",
      render: (text, record) => (
        <span>{(record.wins/(record.losses+record.wins)) || 0}%</span>
      )
    }
  ];

  const [summoners, setSummoners] = useState([]);
  useEffect(() => {
    async function loadSummoners(){
      let allSumms = []
      for (let i = 0; i < summonersNames.length; i++) {
        const summ =  await fetch(`http://localhost:3000/get/${summonersNames[i]}`).then(res => res.json())
        allSumms.push(summ)
      }
      allSumms = allSumms.sort(ordenacion)
      console.log(allSumms)
      setSummoners(allSumms)
    }
    loadSummoners()
  }, [])
  return (
    <div>
      <h1>SoloQ Challenge 2</h1>
      {
         <Table columns={columns} dataSource={summoners}  />
      }
    </div>
  );
}

export default App;