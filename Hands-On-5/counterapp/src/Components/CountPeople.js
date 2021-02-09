import React, { Component } from 'react';
import '../Stylesheets/mystyle.css';

export class CountPeople extends Component {
    constructor(){
        super();
        this.state={
            entrycount: 0,
            exitcount: 0,
            c: 0
        }
    }

    updateEntry() {
        this.setState((prevState, props) => { 
            return {entrycount: prevState.entrycount + 1}
        });
    }
    
    updateExit(){
        this.setState((prevState, props) => { 
            return {exitcount: prevState.exitcount + 1}
        });
    }

    render(){
        return (
            <div className='counter'>
                <div className='entry'>
                    <button onClick={() => this.updateEntry()}>Login</button>
                    <span> {this.state.entrycount} People Entered!!!</span>
                </div>

                <div className='exit'>
                    <button onClick={() => this.updateExit()}>Exit</button>
                    <span> {this.state.exitcount} People Left!!!</span>
                </div>
            </div>
        )}
}