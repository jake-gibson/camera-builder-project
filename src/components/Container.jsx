import React from "react";
import Grid from "./Grid.jsx";
import EqGrid from "./EqGrid.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Container = () => {

    return(
        <Router>
            <div id="container">
                <Routes>
                    <Route 
                    exact
                    path='/blackmagic'
                    element={<Grid />} />
                    <Route 
                    exact
                    path="/"
                    element={<EqGrid />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Container;