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
                outComes.map(el => <div key={el.id} className={`${el.odd > 20 ? "coefficient" : "coefficient-down"}`}>{el.odd}</div>) 
                : null
            }
        </div>
    );
};

export default Coefficient;