import React from "react";
import Result from "./Result.jsx";

const Grid = () => {

    const results = [];

    for(let i = 0; i < 4; i++){
        results.push(<Result />)
    }

    return(
        <div id="grid">
            {results}
        </div>
    );
}

export default Grid;