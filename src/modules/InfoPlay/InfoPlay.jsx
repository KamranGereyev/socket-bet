import React from "react";
import "./infoPlay.scss";

const InfoPlay = props => {
    const {
        gameName,
        numberPlay, 
    } = props;
    
    return(
        <div className='info-play'>
            <div className='number-play'>{numberPlay}</div>
            <div>{gameName}</div>
        </div>
    );
};

export default InfoPlay;