import React, {useState, useEffect, useRef} from "react";
import "./header.css";
import InfoPlay from "../InfoPlay";
import TeamName from "../TeamName";
import TeamInfo from "../TeamInfo";
import GoalInfo from "../GoalInfo";
import Box from "../Box";
import Coefficient from "../Coefficient";

const Header = props => {
    const { setData, getData } = props;
    const ws = new WebSocket("ws://localhost:3002");

    useEffect(() => {
        ws.addEventListener("message", function (e) {
            setData(JSON.parse(e.data))//TODO look for api result
            ws.send(JSON.stringify(getData))
        }) 
    }, [])
    
    return (
    <div className='wrapper'>
        <div className='wrapper-container'>
            <InfoPlay numberPlay={getData.programCode} gameName={getData.sportId}/>
            <TeamName teams={getData.teams}/>
            <TeamInfo liveStatistic={getData.liveStatistics}/>
            <GoalInfo liveStatistics={getData.liveStatistics}/>
            <Box mbn={getData.mbn}/>
            <Coefficient outComes={getData.outcomes}/>
        </div>
    </div>
    )
};

export default Header;