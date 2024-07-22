import React from 'react';
import Build from './Build.jsx';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, HistoryRouterProps } from 'react-router-dom';

const Header = () => {
  const [nameBlank, setBlank] = useState(false);
  // const [home, setHome] = useState(true)

  const cost = useSelector((state) => state.equip.totalCost);
  const currBuild = {
    date: Date.now(),
    totalCost: cost,
    lensBuild: useSelector((state) => state.equip.lensBuild),
    cameraBuild: useSelector((state) => state.equip.cameraBuild),
    batteryBuild: useSelector((state) => state.equip.batteryBuild),
    mediaBuild: useSelector((state) => state.equip.mediaBuild),
    gripBuild: useSelector((state) => state.equip.gripBuild),
    aksBuild: useSelector((state) => state.equip.aksBuild),
  };
  const deciCost = () => {
    if (cost === 0) return 0;
    let temp = '' + cost;
    console.log(temp);
    temp = temp.slice(0, -3) + ',' + temp.slice(-3);
    if (temp.length < 5) temp = temp.slice(1);
    return temp;
  };

  //TODO: trying to get comma into cost again

  const goBack = () => {
    // console.log(location, 'YUP:', location.pathname)
    history.go(-1);
    // if(location.pathname === '/') setHome(true);
  };

  const saveBuild = () => {
    if (currBuild.totalCost === 0) return;

    const buildName = document.querySelector('#submission-name');
    if (buildName.value === '') {
      setBlank(true);
      return;
    }

    setBlank(false);

    console.log('clicked');
    console.log('inside: ', currBuild);
    fetch(`/saveBuild`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...currBuild, name: buildName.value }),
    })
      .then((res) => res.json())
      .then((res) => {
        //an array of product objects
        console.log('Back from Server, heres the new build:');
        console.log(res);
        // setData(res);
      });
  };

  return (
    <div id="header">
      <div id="top">
        <input id="submission-name" placeholder="Project"></input>
      </div>
      <Build />
      <div id="bottom">
        <button onClick={goBack} className="button">
          Back
        </button>
        {nameBlank && <div id="warning2">Fill in Project Name</div>}
        <h4>
          Cost: <sup>$</sup>
          {deciCost()}
        </h4>
        {nameBlank && <div id="warning">Fill in Project Name</div>}
        <button onClick={saveBuild} className="button">
          Save Build
        </button>
      </div>
    </div>
  );
};

export default Header;
