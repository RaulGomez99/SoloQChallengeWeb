const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { LolApi, Constants } = require('twisted');
const path = require('path');
const api = new LolApi({key:"RGAPI-30d78e72-9ed8-48f9-a53e-0f07479f76ed"})
const cors = require('cors');
app.use(cors())

app.get("/get/:summoner", async (req,res) => {
    const {summoner} = req.params
    const summ = (await api.Summoner.getByName(summoner, Constants.Regions.EU_WEST)).response
    const id = summ.id
    const league = (await api.League.bySummoner(id, Constants.Regions.EU_WEST)).response
    let ligNumber = 0
    if(league[1]){ 
        if(league[1].queueType == "RANKED_SOLO_5x5"){
            ligNumber = 1
        }
    }
    const leag = league[ligNumber] || {
        tier: "UNRANKED",
        league: "UNRANKED",
        wins: 0,
        losses: 0,
        promo: false
    }
    const retorna = {
        key: summ.id,
        name: summ.name,
        iconId: summ.profileIconId,
        league: leag.tier,
        tier: leag.rank,
        points: leag.leaguePoints,
        wins: leag.wins,
        losses: leag.losses,
        promo: leag.miniSeries || false,
        level: summ.summonerLevel
    }
    console.log(retorna)
    res.send(retorna)
})

app.get("/games/:summonner", async (req, res) => {
    const {summoner} = req.params
    try{
        const summ = (await api.Summoner.getByName(summoner, Constants.Regions.EU_WEST)).response
        const id = summ.accountId
        const resp = (await api.Match.list(id, Constants.Regions.EU_WEST)).response
        res.send(resp)
    }catch{
        res.send([])
    }
})
app.use(express.static(path.join(__dirname, "client", 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "client",'build', 'index.html'));
});
app.listen(port,()=>console.log('Escuchando en el puerto: '+port, path.join(__dirname, 'client/build')))

