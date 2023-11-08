import React from "react";
import Result from "./Result.jsx";
// import Equipment from "./Equipment.jsx";
import { useState } from "react";


const Grid = () => {

    const [data, setData] = useState(Array(20).fill(''))
    
    const getResults = () => {
        console.log('clicked')
        fetch('/results/')
        .then(res => res.json())
        .then((res)  => { //an array of product objects
            setData(res);
        })
    }

    const results = [];

    for(let i = 0; i < 20; i++){
        results.push(<Result resultData={data[i]} getResults={getResults}/>)
    }

    return(
         <div id="grid">
             {results}
             {/* {equip} */}
          </div>
    );
}

export default Grid;