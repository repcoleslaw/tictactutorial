import React, { Component } from 'react';

// importing components I have written
import Board from'./board';

// import styling

import '../App.css'



class Game extends Component{

  constructor(props){
    super(props);
    this.state={
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  };
    // We need to define the handleClick method
    handleClick(i){
      // since this operating on an index of the array, we need use the slice method to grab ONLY the [i] called.
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const square = current.squares.slice();
      if (calculateWinner(square) || square[i]){
        return;
      }
      square[i] = this.state.xIsNext ? 'X' : 'O';
        // we are checking the boolean of 'is X next' and using the turnary operator of ? (if true) ___ : (else) ___;
      this.setState({
        history: history.concat([{
          squares:square,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      })
      // first square is the state object couple, paired with the square defined within the method.
  
    };

    // Define the jumpTo method
    jumpTo(step){
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      })
    }

    //define master reset

    resetHanlder() {
      this.setState(this.state.history);

    }

  
  

  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    // mapping over the move history to render them on screen
    const moves = history.map((step,move) => {
      const desc = move ?
      'Go to move # ' + move :
      'Go to game start';
      return(
        <li key={move}>
          <button onClick={()=> this.jumpTo(move)}> {desc}</button>
          {/* the jumpTo method is something that we are going to define. */}
        </li>
      )
    })


    let status;
    if(winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return(
      <div className="game">
        {/* render the board stuff */}
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        {/* render the game history */}
        <div className="game-info">
         <div> {status}</div> 
         <ol> {moves}</ol> 

        </div>
     
      </div>
    );
  }
}

export default Game;

function calculateWinner(squares){

  // the following lines are all the possible win conditions in a 3 x 3 grid array.
  const lines = [
    //rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      // check if square A exists, and establish a value, check if that value exists in position B, as well as C.
      return squares[a];
    }
  }
  return null;
}