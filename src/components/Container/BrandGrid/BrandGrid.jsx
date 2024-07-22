import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Brand from './Brand.jsx';

const BrandGrid = ({ eqType }) => {
  const brandList = {
    Lens: [
      'Angenieux',
      'ARRI',
      'Canon',
      'Cooke',
      'Fujinon',
      'Sigma',
      'Sony',
      'Zeiss',
    ],
    Camera: [
      'ARRI',
      'Blackmagic',
      'Canon',
      'Kinefinity',
      'Panasonic',
      'RED',
      'Sony',
      'Z-Cam',
    ],
    Battery: ['Gold-Mount', 'V-Mount', 'B-Mount', 'Canon-LP', 'Sony-NP'],
    // Battery: ['Anton/Bauer', 'bebob', 'CORE SWX', 'Dracast', 'Hawk-Woods', 'IndiPRO', 'SHAPE', 'SmallRig', 'WATSON' ],
    Media: [
      'CFast-2.0',
      'CFExpress-Type-A',
      'CFExpress-Type-B',
      'SD',
      'microSD',
      'ARRI-Codex',
      'Sony-XQD',
      'Sony-SxS',
    ],
    Grip: [
      'Tripod',
      'Stabilizer',
      'Dolly',
      'Crane',
      'Car-Mount',
      'Shoulder-Mount',
      'Steadicam',
    ],
    AKS: ['Monitor', 'Video-Transmission', 'Follow-Focus', 'SDI-Cables'],
    // AKS: ['On-Cam Monitor', 'Production Monitor', 'Wireless Video', 'Follow Focus', 'Sound', '', '', 'RangeFinder' ],
  };
  //how to access path
  const [brand, setBrand] = useState(brandList[eqType]);

  const brands = [];

  for (let i = 0; i < brand.length; i++) {
    brands.push(<Brand eqType={eqType} name={brand[i]} />);
  }

  return (
    <motion.div
      id="brand-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {brands}
    </motion.div>
  );
};

export default BrandGrid;
