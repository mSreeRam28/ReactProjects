import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default function MenuComponent(props){

    function forLogout(){
        props.changeLoginState(false);
        props.setLoginUserId(0);
    }

    if(props.isLoggedIn){
        return(
            <nav key={props.isLoggedIn} className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">mStock App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/companies">Companies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/watchlist">Watch List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/performance">Compare Performance</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={forLogout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    else{
        return(
            <nav key={props.isLoggedIn} className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">mStock App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/companies">Companies</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}