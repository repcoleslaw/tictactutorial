import React, {Component} from 'react';

// importing components
import Square from './square';

// import styling

import '../App.css'

class Board extends Component{

  // LIFTING UP STATES TO THE BOARD LEVEL
  // To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in THEIR PARENT COMPONENT.
  // parent can pass state down to children using props; this will keep child components in sync w each other. 


    // this creates an array of 9 items 'filled' w the value null. If we fill the board it will look like this.
    
      /* [
        'O', null, 'X',
        'X', 'X', 'O',
        'O', null, null,
        ]*/

    // square[0] : 'o'
    // square[1] : 'null' .. etc
 


  // We create a METHOD called renderSquare. The term RENDER in this method is by OUR design, and is not native of the application. this will need to be placed inside the render function to actually bind the element on the website. 

  // Since we have lifted up the state being set by the Boards array, passing the value through the props, we also need to manage receiving the inputs from the parent. 



  renderSquare(i){
    return (
    <Square   
    
        // Since we have lifted up the state being set by the Boards array, passing the value through the props, we also need to manage receiving the inputs from the parent. 

        value={this.props.squares[i]} 
        onClick={()=>this.props.onClick(i)}  

      />
    );
  };



  // We need to use the RENDER METHOD to get this on the screen.

  render(){
    return(
      <div> 

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
  };
};


export default Board;
