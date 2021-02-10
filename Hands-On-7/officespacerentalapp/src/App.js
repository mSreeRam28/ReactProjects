import logo from './logo.svg';
import './App.css';
import './Stylesheets/mystyle.css';
import source from '../src/office-space.jpg'

function App() {
  const element = 'Office Space';
  const image = <img src={source} width='50%' height='50%' alt='Office Space'></img>
  const office = {Name: 'DBS', Rent: 50000, Address: 'Chennai'};

  let colors = [];
  if(office.Rent <= 60000)
    colors.push('textred');
  else
    colors.push('textgreen');
  return (
    <div className='position'>
      <h1>{element} , at Affordable Range</h1>
      {image}
      <h1>Name: {office.Name}</h1>
      <h3 className={colors}>Rent: Rs. {office.Rent}</h3>
      <h3>Address: {office.Address}</h3>
    </div>
  );
}

export default App;
