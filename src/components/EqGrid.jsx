import React from "react";
import Equipment from "./Equipment.jsx";
import { useState } from "react";


const EqGrid = () => {

    const equip = [];

    for(let i = 0; i < 8; i++){
        equip.push(<Equipment />)
    }

    return(
        <div id="eq-grid">
            {/* {results} */}
            {equip}
        </div>
    );
}

export default EqGrid;