import React, { useState, useEffect } from 'react';
import OldBuild from './OldBuild.jsx';
import Header from './Header/Header.jsx';
import Container from './Container/Container.jsx';
// import { openDropdown } from '../reducers/dynamicSlice.js'
import { useDispatch, useSelector } from 'react-redux';
import { TRUE } from 'sass';
import AiContainer from './AiContainer/AiContainer.jsx';

const MainContainer = () => {
  //should actually have open as a redux state..

  // const openRedux = useSelector((state) => state.dynamic.open)

  const [open, setOpen] = useState(false);
  const [buildList, setBuildList] = useState([]);
  const [empty, setEmpty] = useState(true);
  // const [deleted, setDeleted] = useState(false)

  // useEffect(() => {
  //     console.log('hello')
  //     setOpen(true);
  //     console.log(open)
  // }, [buildList])

  const getBuilds = () => {
    if (open) {
      setOpen(!open);
      return;
    }
    //fetching all builds
    console.log('clicked, getting all builds');
    fetch(`/getAllBuilds`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((allBuilds) => {
        //an array of product objects
        console.log('Back from Server, here are all builds:');
        console.log(allBuilds);

        const oldBuilds = [];

        for (let build of allBuilds) {
          oldBuilds.push(
            <OldBuild
              className="old-build"
              // name={build.date}
              data={build}
              deleteBuild={deleteBuild}
            />
          );
        }
        oldBuilds.length ? setEmpty(false) : setEmpty(true);
        setBuildList(oldBuilds);

        //displaying the old build box:///////////
        setOpen(!open);
        // setDeleted(false);
      });
  };

  // const [open, setOpen] = useState(false)
  // const [buildList, setBuildList] = useState([])

  const deleteBuild = (data) => {
    console.log('clicked, deleting build in db');
    fetch(`/deleteBuild`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: data._id }),
    })
      .then((res) => res.json())
      .then((deletedBuild) => {
        //an array of product objects
        console.log('Back from Server, here is the deleted build:');
        console.log(deletedBuild);

        //figure out how to identify the build in the array
        const oldBuilds = buildList;
        const newOldBuilds = [];

        for (let build of oldBuilds) {
          if (build._id === data._id) continue;
          newOldBuilds.push(
            <OldBuild
              className="old-build"
              date={build.date}
              data={build}
              deleteBuild={deleteBuild}
            />
          );
        }
        if (!oldBuilds.length) setEmpty(true);
        setBuildList(newOldBuilds);
        setOpen(false);
      });
  };

  return (
    <div id="main">
      <div id="nav-bar">
        <p id="headText">💎cameraMode.io</p>
        <div>
          <button id="your-builds" onMouseEnter={getBuilds}>
            Prev Builds
          </button>
          {!empty && open && <div id="build-list">{buildList}</div>}
        </div>
      </div>
      <Header />
      <AiContainer />
      <Container />
    </div>
  );
};

export default MainContainer;
