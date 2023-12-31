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
import { remove } from '../reducers/equipmentSlice'
import { useDispatch, useSelector } from "react-redux";

const BuildDiv = ({ type }) => {
    const dispatch = useDispatch()
    // const stateEqType = useSelector((state) => state.equip.currentEqType );
    // const type = objectType[stateEqType]
    const buildObj = useSelector((state) => state.equip[type] )
    // console.log(buildObj)
    const {title, price, link, imgURL } = buildObj

    const convertStr = {
        lens: lens,
        camera: camera,
        battery: battery,
        card: card,
        grip: grip,
        monitor: monitor
    }

    const imgSrc = convertStr[imgURL]  ? convertStr[imgURL]  : imgURL
    // console.log(imgSrc)

    return(
        <div onClick={() => dispatch(remove({type}))} className='buildDiv'>
            {/* <div>{title || ''}</div> */}
            <img src={imgSrc}></img>
            {/* <div>{price || ''}</div> */}
        </div>
    );
}

export default BuildDiv;