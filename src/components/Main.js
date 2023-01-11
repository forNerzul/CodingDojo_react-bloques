import React, { Component } from "react";
import Subcontent from "./Subcontent";
import Advertisement from "./Advertisement";
import "./styles.css";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="subcontent-section">
                    <Subcontent />
                    <Subcontent />
                    <Subcontent />
                </div>
                <Advertisement />
            </div>
        );
    }
}

export default Main;
