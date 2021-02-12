import React, { Component } from 'react';

export class ComplaintRegister extends Component {
    constructor(){
        super();
        this.state={
            name: '',
            complaint: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    calNumber = () => {
        var randomnumber = Math.ceil(Math.random() * 100) + 1;
        this.setState({NumberHolder: randomnumber});
    }

    handleChange(event){
        this.setState({[event.target.name] : [event.target.value]});
    }

    handleSubmit(event){
        var message = ('Thanks ' + this.state.name +
                        '\nYour Complaint was Submitted.\n' +
                        'Transaction ID is '+ this.state.NumberHolder);
        alert(message);
        event.preventDefault();
    }
    
    render() {
        return(
            <div>
                <h1 style={{color:'red'}}>Register your complaints here!!!</h1>
                <form onSubmit={this.handleSubmit}>
                    <table align='center'>
                        <tr>
                            <td><label for='name'>Name:</label></td>
                            <td><input type='text' name='name' value={this.state.name} onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label for='complaint'>Complaint:</label></td>
                            <td><textarea name='complaint' value={this.state.complaint} onChange={this.handleChange} rows='2' cols='20'/></td>
                        </tr>
                        <tr>
                            <td colSpan='2' align='center'><button type='submit' onClick={this.calNumber}>Submit</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}