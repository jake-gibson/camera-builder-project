import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../reducers/equipmentSlice';

const PlusMinus = ({ type }) => {
  const dispatch = useDispatch();

  return (
    <div className="build-div-incrementor">
      <button className="minus" onClick={() => dispatch(decrement({ type }))}>
        -
      </button>
      <p className="quantity">{`${useSelector(
        (state) => state.equip[type].quantity
      )}`}</p>
      <button className="plus" onClick={() => dispatch(increment({ type }))}>
        +
      </button>
    </div>
  );
};

export default PlusMinus;
