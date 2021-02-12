import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function LoginButton(props){
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props){
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

function UserGreetings(){
  return(
    <div>
      <h1>Welcome back</h1>
    </div>
  )
}

function GuestGreetings(){
  return(
    <div>
      <h1>Please sign up.</h1>
    </div>
  )
}

function Greetings(props){
  if(props.isLoggedIn)
    return <UserGreetings/>
  return <GuestGreetings/>
}


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(!loggedIn);
  } 

  function logout() {
    setLoggedIn(!loggedIn);
  } 

  var button;
  if(loggedIn) button = <LogoutButton onClick={logout}/>;
  else button = <LoginButton onClick={login}/>;
  return (
    <div className="App">
      <Greetings isLoggedIn={loggedIn}/>
      {button}
    </div>
  );
}

export default App;
