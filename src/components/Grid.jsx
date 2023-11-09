import React from "react";
import Result from "./Result.jsx";
// import Equipment from "./Equipment.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import backup from "../backup/backup.js";


const Grid = () => {
    
    const stateUrl = useSelector((state) => state.equip.url )
    const stateEqType = useSelector((state) => state.equip.currentEqType )
    console.log('up here', stateUrl)
    
    const [data, setData] = useState(Array(20).fill(''))
    const [url, setURL] = useState('')
    
    
    
    // const getResults = 
    useEffect(() => {
        setData(backup[stateEqType]);

        // console.log('clicked')
        // console.log('inside: ', stateUrl)
        // fetch(`/resultsLoad`, {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({url: stateUrl})
        // })
        // .then(res => res.json())
        // .then((res)  => { //an array of product objects
        //     console.log(res)
        //     setData(res);
        // })
    }, [])

    // getResults();

    const results = [];

    for(let i = 0; i < 20; i++){
        results.push(<Result resultData={data[i]} currEqType={stateEqType} />)
    }

    return(
         <div id="grid">
             {results}
          </div>
    );
}

export default Grid;