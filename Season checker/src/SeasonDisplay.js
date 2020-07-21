import "./SeasonDisplay.css";
import React from 'react';

// To get as much logic out of functional components
// in a sense helper object for the componet 
const  seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Sheesh, it is cold",
        iconName: "snowflake"
    }
};

// Get season determines the user location
// in a sense helper functions for the componet 
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat < 0 ? "winter" : "summer"
    }
};

// pass in props to access propeties from the parent componet (index.js)
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season];


    // in this case className is an object that has a reg html class 
    //and Js variable
    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    );
};

// allows for parent componet (index.js) to access it.
export default SeasonDisplay;