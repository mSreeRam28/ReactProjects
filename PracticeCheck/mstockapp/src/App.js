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
    <BrowserRouter>
      <React.Fragment>
        <MenuComponent isLoggedIn={login}/>
        {/* <Switch>
          <Route path='/companies' render={() => <CompaniesListComponent isLoggedIn={login} userId={userId}/>}/>
          <Route path='/login' render={() => <LoginComponent changeLoginState={setLogin} setLoginUserId={setUserId}/>}/>
          <Route path='/watchlist'>
            <WatchListComponent isLoggedIn={login} userId={userId}/>
          </Route>
          <Route path='/performance'>
            <PerformanceComponent/>
          </Route>
        </Switch> */}
        <PerformanceComponent/>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
