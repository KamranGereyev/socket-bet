import React from "react";
import "./coefficient.css";

const Coefficient = props => {
    const {
        outComes
    } = props;

    return(
        <div className='wrapper-container-coefficient'>
        {
           outComes !== undefined ? outComes.map(el => <div key={el.id} className= "coefficient">{el.odd}</div>) : null
        }
        </div>
    );
};

export default Coefficient;