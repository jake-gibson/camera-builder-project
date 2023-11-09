import React from "react";
// import { useState } from "react";
import { loadOldBuild } from '../reducers/equipmentSlice'
import { useDispatch } from "react-redux";

const OldBuild = ({ date, data, deleteBuild }) => {
    const dispatch = useDispatch()

    const { totalCost } = data;
    const dateTime = new Date(date).toDateString()

    return (
        <button onClick={(target) => dispatch(loadOldBuild({target, data}))} className='oldBuild'>
            <p><b>{data.name}</b><br></br>Cost: ${totalCost}</p> <div onClick={() => deleteBuild(data)}>X</div>
        </button>
    );
}

export default OldBuild