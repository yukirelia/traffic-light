import { useState } from 'react';
import './App.css';
import Control from './components/Control';
import Light from './components/Light';

function App() {
  const [indexActive, setIndexActive] = useState(0);
  const listColors = [
    "red",
    "yellow",
    "green"
  ];

  return (
    <div className="App">
      <Control onNext={() => setIndexActive((indexActive + 1) % listColors.length)}/>
      <div className='traffic'>
      {
        listColors.map((value, index) => <Light key={index} color={index === indexActive && value}/>)
      }
      </div>
    </div>
  );
}

export default App;
