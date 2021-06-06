import React from "react";
import "./teamName.css";

const TeamName = props => {
    const { 
        teams
    }= props;

    return(
        <div className='wrapper-container-teams'>
        {
            teams !== undefined ? <><span>{teams.home}</span> <span>{teams.away}</span></>: null
        }
        </div>
    );
};

export default TeamName;