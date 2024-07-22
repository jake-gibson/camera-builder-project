import React from 'react';
import styled from 'styled-components';
import Grid from './Results/Grid.jsx';
import BrandGrid from './BrandGrid/BrandGrid.jsx';
import EqGrid from './EqGrid/EqGrid.jsx';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

// const StyledGrid = styled.div`
// .transition-enter {
//     opacity: 0.01;
//     transform: translate(0, -10px)
// }

// .transition-enter-active {
//     opacity: 1;
//     transform: translate(0, 0);
//     transition: all .3s ease-in;
// }

// .transition-exit {
//     opacity: 1;
//     transform: translate(0, 0)
// }

// .transition-exit-active {
//     opacity: 0.01;
//     transform: translate(0, 10px);
//     transition: all .3s ease-in;
// }
// `;

const Container = (props) => {
  const [depth, setDepth] = useState(-1);
  const location = useLocation();
  const timeout = { enter: 450, exit: 450 };

  const getDepth = (location) => {
    let pathArr = location.pathname.split('/');
    pathArr = pathArr.filter((n) => n !== '');
    return pathArr.length;
  };

  // useEffect(() => {

  // }, [])

  return (
    <div id="container">
      {/* <TransitionGroup id="container" component="div">
                <CSSTransition
                    // key={location.key}
                    timeout={timeout}
                    classNames="transition"
                    mountOnEnter={false}
                    unmountOnExit={true}
                > */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/results" element={<Grid />} />
          <Route exact path="/lens" element={<BrandGrid eqType={'Lens'} />} />
          <Route
            exact
            path="/camera"
            element={<BrandGrid eqType={'Camera'} />}
          />
          <Route
            exact
            path="/battery"
            element={<BrandGrid eqType={'Battery'} />}
          />
          <Route exact path="/media" element={<BrandGrid eqType={'Media'} />} />
          <Route exact path="/grip" element={<BrandGrid eqType={'Grip'} />} />
          <Route exact path="/AKS" element={<BrandGrid eqType={'AKS'} />} />
          <Route exact path="/" element={<EqGrid />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </AnimatePresence>
      {/* </CSSTransition>
                </TransitionGroup> */}
    </div>
  );
};

export default Container;
