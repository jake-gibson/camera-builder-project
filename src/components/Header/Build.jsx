import React from "react";
import BuildDiv from "./BuildDiv.jsx";
import { useSelector } from "react-redux";

const Build = () => {

    const objectType = [
        'lensBuild', 'cameraBuild', 'batteryBuild', 'mediaBuild', 'gripBuild', 'aksBuild',
    ]

    const buildDivs = [];

    for(let i = 0; i < 6; i++){
        buildDivs.push(<BuildDiv key={`buildDiv${i}`} type={objectType[i]} />)
    }

    return(
        <div id="build">
            {buildDivs}
        </div>
    );
}

export default Build;