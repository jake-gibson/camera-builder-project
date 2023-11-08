import React from "react";
import lens from '../assets/lens.PNG'
import camera from '../assets/camera.PNG'
import battery from '../assets/battery.PNG'
import card from '../assets/card.PNG'
import grip from '../assets/tripod.PNG'
import monitor from '../assets/monitor.PNG'
import videofeed from '../assets/videofeed.PNG'
import mic from '../assets/microphone.PNG'
import cables from '../assets/cables.PNG'
import { useSelector } from "react-redux";

const BuildDiv = ({ type }) => {
    
    // const stateEqType = useSelector((state) => state.equip.currentEqType );
    // const type = objectType[stateEqType]
    const buildObj = useSelector((state) => state.equip[type] )
    console.log(buildObj)
    const {title, price, link, imgURL } = buildObj

    const convertStr = {
        lens: lens,
        camera: camera,
        battery: battery,
        card: card,
        grip: grip,
    }

    // const imgSrc = imgURL ? convertStr[imgURL] : imgURL

    return(
        <div className='buildDiv'>
            <div>{title || ''}</div>
            <img src={convertStr[imgURL]}></img>
            <div>{price || ''}</div>
        </div>
    );
}

export default BuildDiv;