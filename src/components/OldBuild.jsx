import React from "react";
// import { useState } from "react";
import { loadOldBuild } from '../reducers/equipmentSlice'
import { useDispatch } from "react-redux";

const OldBuild = ({ name, data }) => {
    const dispatch = useDispatch()
    
    // const {title, price, link, imgURL } = resultData
    //() => dispatch(addItem({data: {title, price: +(price.replace(/[\$,]/g, '')), link, imgURL }}))

    return (
        <button onClick={(target) => dispatch(loadOldBuild({target, data}))} className='oldBuild'>
            {name}
            {/* <a src={link || '#'}>
                <h4>{title || ''}</h4>
                <img src={`${imgURL}` || ''}></img>
                <p>{price || ''}</p>
            </a> */}
        </button>
    );
}

export default OldBuild