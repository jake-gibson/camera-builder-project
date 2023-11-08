import React from "react";
import Grid from "./Grid.jsx";
import BrandGrid from "./BrandGrid.jsx";
import EqGrid from "./EqGrid.jsx";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";

const Container = () => {

    // const url = useSelector((state) => { state.equip.url })

    // const [url, setUrl] = useState('');
    //TODO: Will need to implement redux so that I can send current url across components
    // so that you can use it in the fetch request in Grid, and useEffect in grid to fetch?? so it goes immediately
//url={url}
    return(
        <Router>
            <div id="container">
                <Routes>
                    <Route exact path='/results' element={<Grid />} />
                    <Route exact path='/lens' element={<BrandGrid eqType={'Lens'}/>} />
                    <Route exact path='/camera' element={<BrandGrid eqType={'Camera'}/>} />
                    <Route exact path='/battery' element={<BrandGrid eqType={'Battery'}/>} />
                    <Route exact path='/media' element={<BrandGrid eqType={'Media'}/>} />
                    <Route exact path='/grip' element={<BrandGrid eqType={'Grip'}/>} />
                    <Route exact path='/AKS' element={<BrandGrid eqType={'AKS'}/>} />
                    <Route exact path="/" element={<EqGrid />} />
                    {/* <Route path="*" element={<NoMatch />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default Container;