import React from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

import "./components/styles.css";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="main-section">
                <Navigation />
                <Main />
            </div>
        </div>
    );
}

export default App;
