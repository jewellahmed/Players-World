import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Players from './components/Players/Players';
import playersData from './fakeData/fakeData.json';




function App() {
  const [players,setPlayers] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {

    setPlayers(playersData);

  },[])
  const handleAddPlayer = (player) => {
    const newCart = [...cart,player];
    setCart(newCart);



  }
  return (
    <div className="container">
      
      <div>
      {  
        playersData.map(player => <Players handleAddPlayer = {handleAddPlayer} player={player}></Players>)
      }
      </div>
      <div className="info">
      <Cart cart={cart} players={playersData}></Cart>
      
      </div>

     
    </div>
  );
}

export default App;
