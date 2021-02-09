import React, {Component} from 'react';

export class Contact extends Component{
    render() { return(
        <div>
            {/* <h1>Welcome to the Contact Page of Student Management Portal</h1> */}
            <button onClick={() => document.getElementById('contact').innerHTML='<h1>Welcome to the Contact Page of Student Management Portal</h1>'}>Contact</button>
            <div id='contact'></div>
        </div>
    );}   
}