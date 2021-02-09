import React, { Component } from 'react';
import '../Stylesheets/mystyle.css'

const decimalToPercent = (decimal) => {
    return (decimal.toFixed(2) + '%')
}

const calcScore = (total, goal) => {
    return (decimalToPercent(total/goal))
}

export const CalculateScore = ({Name, School, total, goal}) => { return(
    <div className="formatstyle">
        <h1><font color="Brown">Student Details</font></h1>
        <div className="Name">
            <b>Name:</b> {Name}
        </div>
        <div className="School">
            <b>School:</b> {School}
        </div>
        <div className="Total">
            <b>Total:</b> {total} Marks
        </div>
        <div className="Score">
            <b>Score:</b> {calcScore(total, goal)}
        </div>
    </div>
)}