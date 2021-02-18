import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MenuComponent from './components/MenuComponent';
import CompaniesListComponent from './components/CompaniesListComponent';
import LoginComponent from './components/LoginComponent';
import WatchListComponent from './components/WatchListComponent';
import PerformanceComponent from './components/PerformanceComponent';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState(0);

  return (
    <RouteComponent login={login} userId={userId} setLogin={setLogin} setUserId={setUserId}/>
  );
}

function RouteComponent(props){
  return(
    <BrowserRouter>
      <React.Fragment>
        <MenuComponent isLoggedIn={props.login} changeLoginState={props.setLogin} setLoginUserId={props.setUserId}/>
        <Switch>
          <Route path='/companies' render={() => <CompaniesListComponent isLoggedIn={props.login} userId={props.userId}/>}/>
          <Route path='/login' render={() => <LoginComponent changeLoginState={props.setLogin} setLoginUserId={props.setUserId}/>}/>
          <Route path='/watchlist'>
            <WatchListComponent isLoggedIn={props.login} userId={props.userId}/>
          </Route>
          <Route path='/performance'>
            <PerformanceComponent/>
          </Route>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
