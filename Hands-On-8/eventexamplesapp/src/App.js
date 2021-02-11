import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { CurrencyConvertor } from './Components/CurrencyConvertor.js'

function App() {
  const [count, setCount] = useState(0);

  const sayHello = (message) => {
    alert('Hello! ' + message);
  }

  const sayWelcome = (message) => {
    alert(message);
  }

  function onPress(){
    alert('I was clicked');
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{sayHello('Ram');setCount(count+1)}}>Increment</button><br/>
      <button onClick={()=>setCount(count-1)}>Decrement</button><br/>
      <button onClick={()=>sayWelcome('welcome')}>Say Welcome</button><br/>
      <button onClick={onPress}>Click on me</button><br/>
      <CurrencyConvertor />
    </div>
  );
}

export default App;
