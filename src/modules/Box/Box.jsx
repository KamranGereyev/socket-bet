import React from "react";
import "./box.css";

const Box = props => {
    const { mbnNumber } = props;
    return(
        <div className='wrapper-container-box'>
            <div className='mbn-box'>{mbnNumber}</div>
        </div>
    );
};

Box.defaultProps = {
    mbnNumber: 1,
}

export default Box;