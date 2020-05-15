import React, { Component } from 'react';

// importing components I have written
import Board from'./board';

// import styling

import '../App.css'

class Game extends Component{

  render(){
    return(
      <div className="game">
        {/* render the board stuff */}
        <div className="game-board">
          <Board />
        </div>
        {/* render the game history */}
        <div className="game-info">
         <div> {/*status*/}</div> 
         <ol> {/*TODO*/}</ol> 

        </div>
      </div>
    );
  }
}

export default Game;