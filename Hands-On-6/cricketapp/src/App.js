import logo from './logo.svg';
import './App.css';
import { players, ListofPlayers, Scorebelow70 } from './Components/ListofPlayers.js';
import { OddPlayers, EvenPlayers, IndianPlayers } from './Components/IndianPlayers.js'

function App() {
  var IndianTeam = ['Sachin','Dhoni','Virat','Rohit','Yuvraj','Raina'];
  var flag = true;

  if(flag === true){
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players}/>
        <hr/>
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players}/>
      </div>
    );
  }
  else{
    return (
      <div>
        <h1>Odd Players</h1>
        {OddPlayers(IndianTeam)}
        <hr/>
        <h1>Even Players</h1>
        {EvenPlayers(IndianTeam)}
        <hr/>
        <h1>List of Indian Players Merged:</h1>
        {IndianPlayers.map((player) => {
          return(
            <div>
              <li>Mr. {player}</li>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
