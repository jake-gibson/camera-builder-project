import React from "react";
// import { useState } from "react";
import { addItem } from '../reducers/equipmentSlice'
import { useDispatch } from "react-redux";

const Result = ({ getResults, currEqType, resultData }) => {
    const dispatch = useDispatch()
    
    const {title, price, link, imgURL } = resultData

    return (
        <button onClick={() => dispatch(addItem({data: resultData}))} className='result'>
            <a src={link || '#'}>
                <div>{title || ''}</div>
                <img src={`${imgURL}` || ''}></img>
                <div>{price || ''}</div>
            </a>
        </button>
    );
}

export default Result