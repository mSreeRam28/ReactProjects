import React, {Component} from 'react';

export class Home extends Component{
    render() { return(
        <div>
            {/* <h1>Welcome to the Home Page of Student Management Portal</h1> */}
            <button onClick={() => document.getElementById('home').innerHTML='<h1>Welcome to the Home Page of Student Management Portal</h1>'}>Home</button>
            <div id='home'></div>
        </div>
    );}   
}