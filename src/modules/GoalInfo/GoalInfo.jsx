import React from "react";
import "./goalInfo.css";

const GoalInfo = props => {
    const {goalNumberHome, goalNumberGuest} = props;
    return(
        <div className='wrapper-container-goal'>
            <span>{goalNumberHome}</span>
            <span>{goalNumberGuest}</span>
        </div>
    );
};

GoalInfo.defaultProps = {
    goalNumberHome: 1,
    goalNumberGuest: 0,
}

export default GoalInfo;