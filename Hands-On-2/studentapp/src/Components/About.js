import React, {Component} from 'react';

export class About extends Component{
    render() { return(
        <div>
            {/* <h1>Welcome to the About Page of Student Management Portal</h1> */}
            <button onClick={() => document.getElementById('about').innerHTML='<h1>Welcome to the About Page of Student Management Portal</h1>'}>About</button>
            <div id='about'></div>
        </div>
    );}   
}