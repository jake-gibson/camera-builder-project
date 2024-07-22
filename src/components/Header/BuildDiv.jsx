import React from 'react';
import PlusMinus from './PlusMinus.jsx';
import lens from '../../assets/lens.PNG';
import camera from '../../assets/camera.PNG';
import battery from '../../assets/battery.PNG';
import card from '../../assets/card.PNG';
import grip from '../../assets/tripod.PNG';
import monitor from '../../assets/monitor.PNG';
import videofeed from '../../assets/videofeed.PNG';
import mic from '../../assets/microphone.PNG';
import cables from '../../assets/cables.PNG';
import { remove } from '../../reducers/equipmentSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import Options from './Options.jsx';

const BuildDiv = ({ type }) => {
  const dispatch = useDispatch();
  // const stateEqType = useSelector((state) => state.equip.currentEqType );
  // const type = objectType[stateEqType]
  const buildObj = useSelector((state) => state.equip[type]);
  const loaded = useSelector((state) => state.equip[type].loaded);
  // console.log(buildObj)
  const { title, price, link, imgURL } = buildObj;

  const convertStr = {
    lens: lens,
    camera: camera,
    battery: battery,
    card: card,
    grip: grip,
    monitor: monitor,
  };

  const imgSrc = convertStr[imgURL] ? convertStr[imgURL] : imgURL;
  // console.log(imgSrc)

  return (
    <div className="buildDiv">
      {/* <div>{title || ''}</div> */}
      {loaded && <Options type={type} />}
      <img src={imgSrc} onClick={() => dispatch(remove({ type }))}></img>
      {loaded && <PlusMinus type={type} />}
      {/* <div>{price || ''}</div> */}
    </div>
  );
};

export default BuildDiv;
