import React, {Component} from 'react';
import CompanyDetailsComponent from './CompanyDetailsComponent';
import Axios from 'axios';

export default class CompaniesListComponent extends Component{
    constructor(){
        super();
        this.state={
            companies: [],
        }
        this.addToWatchList = this.addToWatchList.bind(this);
    }
    
    async componentDidMount(){
        Axios.get(`http://localhost:8081/companies`)
            .then(res => {
                const data = res.data;
                this.setState({companies: data});
            })
    }

    addToWatchList(event, id){
        const body = {
            userId: this.props.userId,
            companyId: id
        }
        Axios.post(`http://localhost:8081/watchList`, body)
                .then(res => {
                    event.target.disabled = true;
                    alert('Successfully added to the watch list');
                })
    }

    render(){
        return(
            <div className='container-fluid'>
                <h1 className='px-4'>Companies List</h1>
                <div className='row px-4 py-4'>
                    {this.state.companies.map((company) => {
                        return(
                            <div className='col-lg-4 col-sm-4' style={{display:'flex'}}>
                                <CompanyDetailsComponent company={company} isLoggedIn={this.props.isLoggedIn} toWatchList={this.addToWatchList} fromWatch={false}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}