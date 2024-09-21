import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateURL } from '../../../reducers/equipmentSlice';

import debug from '../../../utils/debugLog';

const Brand = ({ eqType, name }) => {
  const dispatch = useDispatch();

  const search = {
    Lens: 'cinema%20lens',
    Camera: 'cinema%20camera',
    Battery: 'camera%20battery',
    Media: 'memory%20card',
    Grip: 'cinema',
    AKS: 'cinema',
  };

  const newUrl = `https://www.bhphotovideo.com/c/search?q=${search[eqType]}%20${name}&sts=ma`;
  debug.log('Just made url: ', newUrl);

  return (
    <Link to={`/results`} className="brandBtn">
      <button
        onClick={() => dispatch(updateURL({ url: newUrl, eq: eqType }))}
        className="brand"
      >
        {name}
      </button>
    </Link>
  );
};

export default Brand;
