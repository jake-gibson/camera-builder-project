import React, { useState } from "react";
import OldBuild from "./OldBuild.jsx";
import Header from "./Header.jsx";
import Container from "./Container.jsx";

//to delete in db : 2023-11-09T16:28:05.138Z (empty)

const MainContainer = () => {

    const [buildList, setBuildList] = useState([])

    const getBuilds = () => {
        console.log('clicked, getting all builds')
        fetch(`/getAllBuilds`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((allBuilds)  => { //an array of product objects
            console.log('Back from Server, here are all builds:')
            console.log(allBuilds)

            const oldBuilds = []

            for(let build of allBuilds){
                oldBuilds.push(<OldBuild name={build.date} data={build}/>)
            }
            setBuildList(oldBuilds);
        })
    }

    return(
        <div id="main">
            <div id='nav-bar'>
                <p id='headText'>Camera Builder</p>
                <div id='build-list'>
                    {buildList}
                </div>
                <button onClick={getBuilds}>Your Builds</button>
            </div>
            <Header />
            <Container />
        </div>
    );
}

export default MainContainer;