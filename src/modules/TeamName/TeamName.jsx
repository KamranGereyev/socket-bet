import React from "react";
import "./teamName.css";

const TeamName = props => {
    const { 
        homeTeamName, 
        guestTeamName
    }= props;
    return(
        <div className='wrapper-container-teams'>
            <span>{homeTeamName}</span>
            <span>{guestTeamName}</span>
        </div>
    );
};

TeamName.defaultProps = {
    homeTeamName: "FC Qarabag",
    guestTeamName: "FC Neftci",
}

export default TeamName;