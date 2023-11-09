import React from "react";
import MainContainer from "./MainContainer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {

    return(
        <Router>
            <div>
                <MainContainer />
            </div>
         </Router>
    );
}

export default App;