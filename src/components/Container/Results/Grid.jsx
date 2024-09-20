import React from 'react';
import Result from './Result.jsx';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import backup from '../../../backup/backup.js';

const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_HOST
    : 'http://localhost:3000';

const Grid = () => {
  const stateUrl = useSelector((state) => state.equip.url);
  const stateEqType = useSelector((state) => state.equip.currentEqType);
  console.log('up here', stateUrl);

  const [data, setData] = useState(Array(20).fill(''));
  const [url, setURL] = useState('');

  // const getResults =
  useEffect(() => {
    setData(backup[stateEqType]);

    // console.log('clicked')
    // console.log('inside: ', stateUrl)
    // fetch(`${API_BASE_URL}/resultsLoad`, {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({url: stateUrl})
    // })
    // .then(res => res.json())
    // .then((res)  => { //an array of product objects
    //     console.log(res)
    //     setData(res);
    // })
  }, []);

  // getResults();

  const results = [];

  for (let i = 0; i < 20; i++) {
    results.push(<Result resultData={data[i]} currEqType={stateEqType} />);
  }

  return (
    <>
      <motion.div
        id="top-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
      <motion.div
        id="grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {results}
      </motion.div>
      <motion.div
        id="bottom-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
    </>
  );
};

export default Grid;
