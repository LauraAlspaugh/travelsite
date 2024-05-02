import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './Card.tsx';
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return(
      <Card
      item = {item}
/>
    ) 
  })
  return (
    <div className="App">
      <nav>
        <p className='travel'><i className='mdi mdi-earth m-2'></i>my travel journal.</p>
      </nav>
      <div className='card-line'>
  {cards}
  

</div>
    </div>
  );
}

export default App;
