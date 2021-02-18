import React, {Component} from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';

const getError = (errors) => {
    return(
        <ul style={{color:'red'}}>
        {Object.values(errors).map((item) => {
            return(
                item === '' ? '' : <li>{item}</li>
            )
        })}
        </ul>
    )
}

export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            email: '',
            password: '',
            errors: {
                email: 'Email is required',
                password: 'Password is required',
                wrong: ''
            },
            displayError: '',
            redirect: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValid = () => {
        if(this.state.email === '' || this.state.password === '')
            return false;
        return true;
    }

    handleSubmit(event){
        if(!this.isValid()){
            console.log(this.state.errors);
            this.setState({displayError: getError(this.state.errors)})
        }
        else{
            const body = {
                email: this.state.email,
                password: this.state.password
            };
            Axios.post(`http://localhost:8081/users`, body)
                .then(res => {
                    const data = res.data;
                    this.props.changeLoginState(true);
                    this.props.setLoginUserId(data.id);
                    this.setState({displayError:'', redirect:'/companies'});
                })
                .catch(error => {
                    this.setState(prevState => ({
                        errors: {
                            ...prevState.errors,
                            wrong: 'Invalid username/password'
                        }
                    }))
                    this.setState({displayError: getError(this.state.errors)});
                })
        }
        event.preventDefault();
    }

    handleChange(event){
        this.setState({displayError:''});
        this.setState({[event.target.name] : [event.target.value]});
        let errors = this.state.errors;
        let { name, value } = event.target;
        switch(name){
            case 'email': errors.email = value.length > 0 ? '' : 'Email is required';
                        break;
            case 'password': errors.password = value.length > 0 ? '' : 'Password is required';
                        break;
            default: break;
        }
        this.setState({errors, [name]:value});
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return(
            <div className='container-fluid'>
                <h1>Let's get started by login</h1>
                <p style={{color:'red'}}>Fields marked with * are mandatory</p>
                {this.state.displayError}
                <form onSubmit={this.handleSubmit}>
                    <div className='py-2'>
                        <label className='form-label'>Email address<sup style={{color:'red'}}>*</sup></label>
                        <input className='form-control' type='text' name='email' value={this.state.email} onChange={this.handleChange} style={{width:'50%'}}/>
                    </div>
                    <div className='py-2'>
                        <label className='form-label'>Password<sup style={{color:'red'}}>*</sup></label>
                        <input className='form-control' type='password' name='password' value={this.state.password} onChange={this.handleChange} style={{width:'50%'}}/>
                    </div>
                    <button type='submit' className='btn-primary' style={{borderRadius:'4px', padding:'5px'}}>Submit</button>
                </form>
            </div>
        );
    }
}