import React from "react";
import "./infoPlay.css";

const InfoPlay = props => {
    const {
        numberPlay, 
        gameName
    } = props;
    return(
        <div className='info-play'>
            <div className='number-play'>{numberPlay}</div>
            <div>{gameName}</div>
        </div>
    );
};

export default InfoPlay;