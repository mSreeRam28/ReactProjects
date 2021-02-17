import React from 'react';

export default function CompanyDetailsComponent(props){

    return(
        <div className='card'>
            <div className='card-header'>
                <h4>{props.company.companyName}</h4>
            </div>
            <div className='card-body'>
                <p>{props.company.description}</p>
            </div>
            <div className='card-footer'>
                <h6 style={{display:'inline-block'}}>Today's Price : ${props.company.currentStockPrice}</h6>
                {props.isLoggedIn ? <button className={props.fromWatch ? 'btn-danger' : 'btn-primary'} style={{display:'inline-block',marginLeft:'10px'}} onClick={(e) => props.toWatchList(e, props.company.companyId)}>{props.fromWatch ? 'Remove' : 'Watch'}</button> : ''}
            </div>
        </div>
    );
}