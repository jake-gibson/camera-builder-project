import React from 'react';
// import { useState } from "react";
import { addItem } from '../../../reducers/equipmentSlice';
import { useDispatch } from 'react-redux';

const Result = ({ currEqType, resultData }) => {
  const dispatch = useDispatch();

  const { title, price, link, imgURL } = resultData;

  // const newTitle = () => {
  //   let newTitle = title
  //     ?.split('')
  //     .filter((el, i) => {
  //       if (i < 30) return el;
  //     })
  //     .join('');

  //   return newTitle?.slice(-1) === ' '
  //     ? newTitle.slice(0, -1)
  //     : newTitle + '...';
  // };

  return (
    <button
      onClick={() =>
        dispatch(
          addItem({
            data: { title, price: +price.replace(/[\$,]/g, ''), link, imgURL },
          })
        )
      }
      className="result"
    >
      <a src={link || '#'}>
        <h4>{title || ''}</h4>
        <div className="result-img">
          <img src={`${imgURL}` || ''}></img>
        </div>
        <p>{price || ''}</p>
      </a>
    </button>
  );
};

export default Result;
