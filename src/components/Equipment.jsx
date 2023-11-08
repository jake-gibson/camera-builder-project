import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Equipment = ({ name }) => {

    const endpoints = {
        Lens: '/lens',
        Camera: '/camera',
        Battery: '/battery',
        Media: '/media',
        Grip: '/grip',
        AKS: '/AKS',
    }

    return (
        <Link to={endpoints[name]} className='equipmentBtn'>
            <button className='equipment'>
                {name}
            </button>
        </Link>
    );
}

export default Equipment