import React from "react";
import Result from "./Result.jsx";
import Equipment from "./Equipment.jsx";

const Grid = () => {

    const results = [];
    const equip = [];

    for(let i = 0; i < 20; i++){
        results.push(<Result />)
    }

    for(let i = 0; i < 8; i++){
        equip.push(<Equipment />)
    }

    return(
        <div id="grid">
            {results}
            {/* {equip} */}
        </div>
    );
}

export default Grid;