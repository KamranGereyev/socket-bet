import React from "react";
import "./teamInfo.css";

const TeamInfo = props => {
    const {
        halfTime, 
        time
    } = props;
    return(
        <div className='wrapper-container-teams-info'>
            <div>{halfTime}</div>
            <div>{time}</div>
        </div>
    );
};

TeamInfo.defaultProps = {
    halfTime: "2h",
    time: "78'"
}


export default TeamInfo;