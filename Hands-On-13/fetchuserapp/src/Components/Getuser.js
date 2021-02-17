import React, { Component } from 'react';

export default class Getuser extends Component {
    constructor(){
        super();
        this.state = {
            person: null,
            loading: true
        }
    }

    async componentDidMount() {
        const res = await fetch(`https://api.randomuser.me/`);
        const data = await res.json();
        this.setState({person: data.results[0], loading:false});
        console.log(this.state.person);
    }

    render(){
        return (
            <div>
                {this.state.loading ? <h6>Loading...</h6> : 
                <div><h1>{this.state.person.name.title} <span>{this.state.person.name.first}</span> <span>{this.state.person.name.last}</span></h1>
                <img src={this.state.person.picture.large} alt='image'/></div> }
            </div>
        );
    }
}