import React, { useEffect } from "react";
import Box from "../Box";
import InfoPlay from "../InfoPlay";
import TeamName from "../TeamName";
import TeamInfo from "../TeamInfo";
import GoalInfo from "../GoalInfo";
import Coefficient from "../Coefficient";
import "./betInfoRow.scss";

const BetInfoRow = props => {
    const { setData, getData } = props;

    useEffect(() => {
    const ws = new WebSocket("ws://localhost:3002");

    ws.addEventListener("message", (e) => {
        setData(JSON.parse(e.data))//TODO look for api result
        ws.send(JSON.stringify(getData))
    }) 
    }, [])
    
    return (
        <div className='wrapper'>
            <div className='wrapper-container'>
                <InfoPlay 
                    gameName={getData.sportId}
                    numberPlay={getData.programCode} 
                />
                <TeamName 
                    teams={getData.teams}
                />
                <TeamInfo 
                    liveStatistic={getData.liveStatistics}
                />
                <GoalInfo 
                    liveStatistics={getData.liveStatistics}
                />
                <Box 
                    mbn={getData.mbn}
                />
                <Coefficient 
                    outComes={getData.outcomes}
                />
            </div>
        </div>
    )
};

export default BetInfoRow;