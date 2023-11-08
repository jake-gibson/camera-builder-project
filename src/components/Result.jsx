import React from "react";
// import { useState } from "react";

const Result = ({ getResults, resultData }) => {
    
    const {title, price, link, imgURL } = resultData

    return (
        <button onClick={getResults} className='result'>
            <a src={link}>
                <div>{title || ''}</div>
                <img src={`${imgURL}` || ''}></img>
                <div>{price || ''}</div>
            </a>
        </button>
    );
}

export default Result