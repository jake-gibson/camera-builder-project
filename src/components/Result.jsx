import React from "react";
// import { useState } from "react";
import { addItem } from '../reducers/equipmentSlice'
import { useDispatch } from "react-redux";

const Result = ({ currEqType, resultData }) => {
    const dispatch = useDispatch()
    
    const {title, price, link, imgURL } = resultData

    const newTitle = title?.split(' ').filter((el, i) => {
            if(i < 6) return el
        }).join(' ')

    return (
        <button onClick={() => dispatch(addItem({data: {title, price: +(price.replace(/[\$,]/g, '')), link, imgURL }}))} className='result'>
            <a src={link || '#'}>
                <h4>{newTitle || ''}</h4>
                <img src={`${imgURL}` || ''}></img>
                <p>{price || ''}</p>
            </a>
        </button>
    );
}

export default Result