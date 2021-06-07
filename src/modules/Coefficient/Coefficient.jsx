import React from "react";
import "./coefficient.scss";

const Coefficient = props => {
    const {
        outComes
    } = props;

    return(
        <div className='wrapper-container-coefficient'>
            {
                outComes !== undefined 
                ?
                <>
                    <div className={`${outComes[0].odd > 20 ? "coefficient" : "coefficient-down"}`}>{outComes[0].odd}</div>
                    <div className={`${outComes[1].odd > 20 ? "coefficient" : "coefficient-down"}`}>{outComes[1].odd}</div>
                    <div className={`${outComes[2].odd > 20 ? "coefficient" : "coefficient-down"}`}>{outComes[2].odd}</div>
                </>
                : null
            }
        </div>
    );
};

export default Coefficient;