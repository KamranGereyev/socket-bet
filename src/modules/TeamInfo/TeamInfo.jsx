import React from "react";
import "./teamInfo.css";

const TeamInfo = props => {
    const {
        liveStatistic
    } = props;
    
    return(
        <div className='wrapper-container-teams-info'>
        {
            liveStatistic !== undefined ? <><div>{liveStatistic.period}</div> <div>{liveStatistic.eventTime}</div></>: null
        }
        </div>
    );
};


export default TeamInfo;