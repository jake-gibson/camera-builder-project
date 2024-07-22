import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const AiContainer = () => {
  const buildObj = useSelector((state) => state.equip.currentAiBuild);

  const { title, price, link, imgURL } = buildObj;
  console.log('AI time: ', buildObj);

  return (
    <div id="ai-container" className={''}>
      <h4>{title || ''}</h4>
      <div className="ai-img">
        <img src={`${imgURL}` || ''}></img>
      </div>
      {/* <p>{price || ''}</p> */}
    </div>
  );
};

export default AiContainer;
