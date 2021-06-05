import React from "react";
import "./coefficient.css";

const Coefficient = props => {
    const {
        winHome, 
        draw, 
        winGuest 
    } = props;
    return(
        <div className='wrapper-container-coefficient'>
            <div className='coefficient'>{winHome}</div>
            <div className='coefficient'>{draw}</div>
            <div className='coefficient'>{winGuest}</div>
        </div>
    );
};

Coefficient.defaultProps = {
    winHome: 50.43,
    draw: 20.12,
    winGuest: 12.21,
}

export default Coefficient;