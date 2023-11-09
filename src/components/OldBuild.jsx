import React from "react";
// import { useState } from "react";
import { loadOldBuild } from '../reducers/equipmentSlice'
import { useDispatch } from "react-redux";

const OldBuild = ({ name, data }) => {
    const dispatch = useDispatch()
    
    // const {title, price, link, imgURL } = resultData
    //() => dispatch(addItem({data: {title, price: +(price.replace(/[\$,]/g, '')), link, imgURL }}))

    const { totalCost } = data;

    const dateTime = new Date(name).toDateString()

    //TODO:FIXME: onClick={} implement delete old item button

    return (
        <button onClick={(target) => dispatch(loadOldBuild({target, data}))} className='oldBuild'>
            <p>{dateTime} <br></br>Cost: ${totalCost}</p> <div >X</div>
        </button>
    );
}

export default OldBuild