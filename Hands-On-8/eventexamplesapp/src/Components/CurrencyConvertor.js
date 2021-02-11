import React, { Component } from 'react';

export class CurrencyConvertor extends Component {
    constructor(){
        super();
        this.state={
            amount: 0,
            currency: '',
            totalAmount: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Converting to ' + this.state.currency + '. Amount is ' + this.state.totalAmount);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({[event.target.name] : [event.target.value]});
    }

    calculateTotal = () => {
        this.setState({totalAmount: this.state.amount*80});
    }

    render() {
        return(
            <div>
                <h1 style={{color:'green'}}>Currency Convertor!!!</h1>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td><label for='amount'>Amount:</label></td>
                            <td><input type='text' onChange={this.handleChange} name='amount' value={this.state.amount}/></td>
                        </tr>
                        <tr>
                            <td><label for='currency'>Currency:</label></td>
                            <td><textarea onChange={this.handleChange} name='currency' value={this.state.currency} rows='2' cols='20'/></td>
                        </tr>
                        <tr>
                            <td colspan='2' align='center'><button type='submit' onClick={this.calculateTotal}>Submit</button></td>
                        </tr>
                    </table>
                </form>
            </div>
    )}
}