import React from "react";
import Build from "./Build.jsx";
import { useSelector } from "react-redux";

const Header = () => {

    const cost = useSelector((state) => state.equip.totalCost )

    return(
        <div id="header">
            <h3>Camera Builder</h3>
            <Build />
            <div id='bottom'>
                <button>Home</button>
                <button>Back</button>  
                <h4>Cost: ${cost}</h4>
            </div>
        </div>
    );
}

export default Header;