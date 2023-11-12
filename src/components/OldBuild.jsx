import React from "react";
// import { useState } from "react";
import { loadOldBuild } from '../reducers/equipmentSlice'
import { useDispatch } from "react-redux";

const OldBuild = ({ date, data, deleteBuild }) => {
    const dispatch = useDispatch()

    const { totalCost } = data;
    // const dateTime = new Date(date).toDateString()

    const deciCost = () => {
        if(totalCost === 0) return 0;
        let temp = '' + totalCost;
        console.log(temp)
        temp = temp.slice(0, -3) + ',' +  temp.slice(-3)
        return temp;
    }

    return (
        <button onClick={(target) => dispatch(loadOldBuild({target, data}))} className='oldBuild'>
            <p><b>{data.name}</b><br></br>${deciCost()}</p> <div onClick={() => deleteBuild(data)}>X</div>
        </button>
    );
}

export default OldBuild