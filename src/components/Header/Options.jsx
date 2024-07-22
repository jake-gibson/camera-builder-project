import React from 'react';
import { useDispatch } from 'react-redux';
import { aiQuery } from '../../reducers/equipmentSlice';

const Options = ({ type }) => {
  const dispatch = useDispatch();

  return (
    <div className="options">
      <button className="question" onClick={() => dispatch(aiQuery({ type }))}>
        Ai
      </button>
    </div>
  );
};

export default Options;
