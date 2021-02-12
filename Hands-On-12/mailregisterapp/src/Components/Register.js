import React, { Component } from 'react';

const getValidity = (errors) => {
    let valid = true;
    Object.values(errors).forEach((item) => {
        item.length > 0 && (valid = false)
    })
    return valid;
}

export class Register extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            errors: {
                name:'',
                email:'',
                password:''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        if(getValidity(this.state.errors))
            console.log('Valid form');
        else{
            let errors = this.state.errors;
            if(errors.name != '')
                alert(errors.name);
            if(errors.email != '')
                alert(errors.email);
            if(errors.password != '')
                alert(errors.password);
        }
        event.preventDefault();
    }

    handleChange(event){
        let errors = this.state.errors;
        let { name, value } = event.target;
        switch(name){
            case 'name': errors.name = value.length > 5 ? '' : 'Name should have atleast 5 characters';
                        break;
            case 'email':  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
                        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid';
                        break;
            case 'password': errors.password = value.length > 8 ? '' : 'Password should have atleast 8 characters';
                        break;
            default: break;
        }
        this.setState({errors, [name]:value});
    }


    render() {
        return(
            <div align='center'>
                <h1 style={{color:'red'}}>Register here!!!</h1>
                <form onSubmit={this.handleSubmit}>
                    <table align='center'>
                        <tr>
                            <td><label for='name'>Name:</label></td>
                            <td><input type='text' name='name' value={this.state.name} onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label for='email'>Email:</label></td>
                            <td><input type='text' name='email' value={this.state.email} onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label for='password'>Password:</label></td>
                            <td><input type='password' name='password' value={this.state.password} onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td colSpan='2' align='center'><button type='submit'>Submit</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}