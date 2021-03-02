import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = (props) => {
    const cart = props.cart;
    const playersData = props.players;
    const total = cart.reduce((total,player) => total + player.salary, 0);
    //console.log(props.players[1])
    //for(let i = 0; i < props.players.length; i++){

        //const playerObject = props.players[i].name;
        //console.log(playerObject);

    //}
    
    //console.log(playerObject)
    

    return (
        <div>
            <h1>Total Players:{playersData.length}</h1>
            <h2>Total Selected Players:{cart.length}</h2>
            <h2>Total Budget:{total}</h2>
            {
                cart.map((player=> <h4>Name:{player.name} {<br></br>}Salary:${player.salary}</h4>))

            }
            
            
            
            
        </div>
       
    );
};

export default Cart;
