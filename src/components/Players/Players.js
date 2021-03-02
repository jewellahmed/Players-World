import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Player.css';




const Players = (props) => {
    const {name,salary,image} = props.player;
    const imageStyle = {width: '200px',height:'200px'}
    const playerStyle = {align:'center', marginLeft: '80px',padding: '10px'}
    
    
    return(
        <div style={playerStyle} className="player">
            <div> 
                <img style={imageStyle} src={image} alt=""/>
            </div>
            <div className="information">
              <h4>Player:{name}</h4>
              <h5>Salary(tk):{salary}</h5>
              <button className="btn btn-primary" onClick={()=> props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faShoppingCart} />Add Player</button>
            </div>
            

            
            
        </div>
    );
};

export default Players;