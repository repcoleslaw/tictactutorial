import React, {Component} from 'react';

// importing components
import Square from './square';

// import styling

import '../App.css'

class Board extends Component{

  // LIFTING UP STATES TO THE BOARD LEVEL
  // To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in THEIR PARENT COMPONENT.
  // parent can pass state down to children using props; this will keep child components in sync w each other. 

  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
    // this creates an array of 9 items 'filled' w the value null. If we fill the board it will look like this.
    
      /* [
        'O', null, 'X',
        'X', 'X', 'O',
        'O', null, null,
        ]*/

    // square[0] : 'o'
    // square[1] : 'null' .. etc
  }



  // We create a METHOD called renderSquare. The term RENDER in this method is by OUR design, and is not native of the application. this will need to be placed inside the render function to actually bind the element on the website. 

  // Since we have lifted up the state being set by the Boards array, passing the value through the props, we also need to manage receiving the inputs from the parent. 



  renderSquare(i){
    return (
    <Square   
    
        // Since we have lifted up the state being set by the Boards array, passing the value through the props, we also need to manage receiving the inputs from the parent. 

        value={this.state.squares[i]} 
        onClick={()=>this.handleClick(i)}  

      />
    );
  }

  // We need to define the handleClick method
  handleClick(i){
    // since this operating on an index of the array, we need use the slice method to grab ONLY the [i] called.
    const square = this.state.squares.slice();
    square[i] = 'X';
    this.setState({squares: square})
    // first square is the state object couple, paired with the square defined within the method.

  }

  // We need to use the RENDER METHOD to get this on the screen.

  render(){
    // we are making status a variable, of who is the next player
    const status = 'Next player: X';
    return(
      <div> 
        <p>{status}</p>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
};

export default Board;