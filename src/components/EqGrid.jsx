import React from "react";
import { useState } from "react";

import Equipment from "./Equipment.jsx";


const EqGrid = () => {

    const [eq, setEq] = useState([
        'Lens', 'Camera', 'Battery', 'Media', 'Grip', 'AKS'
    ])

    const equip = [];

    for(let i = 0; i < 6; i++){
        equip.push(<Equipment key={`equip${i}`} name={eq[i]}/>)
    }

    return(
        <div id="eq-grid">
            {equip}
        </div>
    );
}

export default EqGrid;