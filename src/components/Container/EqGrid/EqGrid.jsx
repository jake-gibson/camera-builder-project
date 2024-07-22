import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Equipment from './Equipment.jsx';

const EqGrid = () => {
  const [eq, setEq] = useState([
    'Lens',
    'Camera',
    'Battery',
    'Media',
    'Grip',
    'AKS',
  ]);

  const equip = [];

  for (let i = 0; i < 6; i++) {
    equip.push(<Equipment key={`equip${i}`} name={eq[i]} />);
  }

  return (
    <motion.div
      id="eq-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {equip}
    </motion.div>
  );
};

export default EqGrid;
