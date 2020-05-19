import React from 'react';

// import styling

import '../App.css'

// [4] Since square just has to worry about rendering, and is not in control of its own state, we can make it a React Component.

function Square(props){

  /*
  [3]coming back to this, since we LIFTED the state to the board, we remove the constructor in the Square as it does not need to manage its state on its own. 

  //[1] to begin to handle state, we need to init a constructor
  constructor(props){
    //[2] we pass in super props to grab stuff from parent, which is the React.Component Element. We need super(props) to use THIS. notation, otherwise this.props will be undefined and throw bugs. 
    super(props);
    this.state = {
      value: null,
    };
  }
  */




    return(
      <button 
      className='square' 
      onClick={props.onClick}
      >
        {props.value}
      </button>
    )
  
}

export default Square;