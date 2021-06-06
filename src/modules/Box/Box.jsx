import React from "react";
import "./box.css";

const Box = props => {
    const { mbn } = props;
    return(
        <div className='wrapper-container-box'>
            <div className='mbn-box'>{mbn}</div>
        </div>
    );
};

export default Box;