import logo from './logo.svg';
import './App.css';
import { OnlineShopping } from './Components/OnlineShopping';

function App() {
  return (
    <div className="App">
      <h1>Items Ordered :</h1>
      <div className='apptable'>
        <table border="1">
          <OnlineShopping/>
        </table>
      </div>
    </div>
  );
}

export default App;
