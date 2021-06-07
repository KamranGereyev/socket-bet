import React from "react";
import "./goalInfo.scss";

const GoalInfo = props => {
    const {
        liveStatistics
    } = props;
    
    return(
        <div className='wrapper-container-goal'>
        {
            liveStatistics !== undefined 
            ? 
            <>
                <span>{liveStatistics.homeScore}</span>
                <span>{liveStatistics.awayScore}</span>
            </>
            : null
        }
        </div>
    );
};

export default GoalInfo;