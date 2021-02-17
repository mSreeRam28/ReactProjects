import React, {Component} from 'react';
import Axios from 'axios';

export default class PerformanceComponent extends Component {
    constructor(){
        super();
        this.state = {
            companies: [],
            selectedCompany1: 0,
            selectedCompany2: 0,
            date1: '',
            date2: '',
            stocks: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    convertStringToDate(list){
        let dateList = [];
        for(var value of list){
            var dateParts = value[0].split("-");
            var dateObject = dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];
            dateList.push(dateObject);
        }
        return dateList; 
    }

    async componentDidMount(){
        Axios.get(`http://localhost:8081/companies`)
            .then(res => {
                const data = res.data;
                this.setState({companies: data});
            })
        console.log();
    }

    handleChange(event){
        this.setState({[event.target.name] : [event.target.value]});
    }

    handleSubmit(event){
        event.preventDefault();
        const dateList = this.convertStringToDate([this.state.date1, this.state.date2]);
        Axios.get(`http://localhost:8081/stocks/compare-performance?companyCode1=${this.state.selectedCompany1}&companyCode2=${this.state.selectedCompany2}&from=${dateList[0]}&to=${dateList[1]}`)
            .then(res => {
                const data = res.data;
                this.setState({stocks: data});
            })
    }

    render(){
        return(
            <div className='container-fluid m-auto' style={{width:'70%'}}>
                <div>
                    <h1 className='mx-3'>Compare potential companies</h1>
                    <h2 className='mx-3'>Make smart investment decision</h2>
                    <form onSubmit={this.handleSubmit} className='mx-3'>
                        <table className='table table-borderless'>
                            <tbody>
                                <tr>
                                    <td>
                                        <label className='form-label'>Select company 1</label>
                                        <select className='form-control' name='selectedCompany1' value={this.state.selectedCompany1} onChange={this.handleChange} style={{width:'90%'}} required>
                                            <option disabled value={0}>choose..</option>
                                            {this.state.companies.map(company => <option value={company.companyId}>{company.companyName}</option>)}
                                        </select>
                                    </td>
                                    <td>
                                        <label className='form-label'>Select company 2</label>
                                        <select className='form-control' name='selectedCompany2' value={this.state.selectedCompany2} onChange={this.handleChange} style={{width:'90%'}} required>
                                            <option disabled value={0}>choose..</option>
                                            {this.state.companies.map(company => <option value={company.companyId}>{company.companyName}</option>)}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='form-label'>From date</label>
                                        <input className='form-control' type='date' name='date1' value={this.state.date1} onChange={this.handleChange} style={{width:'90%'}}/>
                                    </td>
                                    <td>
                                        <label className='form-label'>To date</label>
                                        <input className='form-control' type='date' name='date2' value={this.state.date2} onChange={this.handleChange} style={{width:'90%'}}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='btn-primary m-2' type='submit' onClick={this.handleOnClick} style={{padding:'5px',borderRadius:'3px'}}>Fetch Details</button>
                    </form>
                </div>
                {this.state.stocks.length > 0 ?
                <div className='container-fluid'>
                    <table className='table'>
                        <thead>
                            <th>Date</th>
                            <th>Company</th>
                            <th>Stock Price</th>
                        </thead>
                        <tbody>
                            {this.state.stocks.map((stock, index) => {
                                return(
                                    <tr>
                                        <td><b>{index%2 === 0 ? stock.date : ''}</b></td>
                                        <td>{stock.company.companyName}</td>
                                        <td><span>$</span>{stock.stockPrice}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>: ''}
            </div>
        );
    }
} 