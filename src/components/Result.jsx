import React from "react";
import { useState } from "react";

const Result = () => {

    const [data, setData] = useState('none')
    
    const getResults = () => {
        console.log('clicked')
        fetch('/results/')
        .then(res => res.json())
        .then(res => { //an array of product objects
            setData(res[0].title);
        })
        // setData('just kidding')
    }
    
    return (
        <button onClick={getResults} className='result'>
            {data}
        </button>
    );
}

export default Result