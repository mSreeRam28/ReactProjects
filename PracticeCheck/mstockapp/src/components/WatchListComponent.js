import React, { Component } from 'react';
import CompanyDetailsComponent from './CompanyDetailsComponent';
import Axios from 'axios';

export default class WatchListComponent extends Component {
    constructor(){
        super();
        this.state = {
            companies: []
        }
        this.removeFromWatchList = this.removeFromWatchList.bind(this);
    }

    async componentDidMount(){
        Axios.get(`http://localhost:8081/watchList/${this.props.userId}`)
            .then(res => {
                const data = res.data;
                this.setState({companies: data});
                console.log(this.state.companies);
            })
    }

    removeFromWatchList(event, id){
        Axios.delete(`http://localhost:8081/watchList/${this.props.userId}/${id}`)
            .then(res => {
                const companies = this.state.companies.filter(c => c.company.companyId !== id);
                this.setState({companies});
                alert('Removed successfully from watch list');
            })
    }

    render(){
        if(this.state.companies.length > 0){
            return(
                <div key={this.props.isLoggedIn} className='container-fluid'>
                    <h1 className='px-4'>My Companies List</h1>
                    <div className='row px-4 py-4'>
                        {this.state.companies.map((company) => {
                            return(
                                <div className='col-lg-4 col-sm-4' style={{display:'flex'}}>
                                    <CompanyDetailsComponent company={company.company} isLoggedIn={this.props.isLoggedIn} toWatchList={this.removeFromWatchList} fromWatch={true}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div key={this.props.isLoggedIn} className='container-fluid'>
                    <h1 className='px-4'>My Companies List</h1>
                    <h2 className='px-4'>No company stock prices added to watch list</h2>
                </div>
            );
        }
    }
}