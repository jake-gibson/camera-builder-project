import React, { useState } from "react";
import OldBuild from "./OldBuild.jsx";
import Header from "./Header.jsx";
import Container from "./Container.jsx";

//to delete in db : 2023-11-09T16:28:05.138Z (empty)

const MainContainer = () => {

    const [open, setOpen] = useState(false)
    const [buildList, setBuildList] = useState([])

    const getBuilds = () => {

        if(open) {
            setOpen(!open)
            return;
        }
        //fetching all builds
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
                oldBuilds.push(<OldBuild className='old-build' name={build.date} data={build}/>)
            }
            setBuildList(oldBuilds);

            //displaying the old build box:///////////
            setOpen(!open)


        })
    }

    //open && 
    //onMouseLeave={getBuilds}

    return(
        <div id="main">
            <div id='nav-bar'>
                <p id='headText'>Camera Builder</p>
                <div id='build-list'>
                    {open && buildList}
                </div>
                <button id="your-builds" onMouseEnter={getBuilds}>Your Builds</button>
            </div>
            <Header />
            <Container />
        </div>
    );
}

export default MainContainer;