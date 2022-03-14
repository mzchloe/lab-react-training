import React from "react";
import './BoxColor.css';

export default function BoxColor(props) {
    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }
    return (
        <div className="box_color">
        <div style={divStyle} className="color">
        rgb({props.r},{props.g},{props.b})
        <br></br>
        #
        </div>
        </div>
    )
};