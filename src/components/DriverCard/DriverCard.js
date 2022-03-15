import React from "react";
import './DriverCard.css';

export default function DriverCard(props) {
    
    return (
        <div className="driver-card">
        <div className="circular">
        <img className="circular--img"src={props.img} alt={props.img}/>
        </div>
        <div className="driver-content">
        <ul>
            <li>{props.name}</li>
            <li>{props.rating} ☆</li>
            <li>{props.car.model} - {props.car.licensePlate}</li>
        </ul>
        </div>
        </div>
    )
}