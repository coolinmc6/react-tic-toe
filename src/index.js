import React from 'react';
import {render} from 'react-dom';
import Board from './board';


// This would normally be my 'App' component

class Game extends React.Component {

	constructor() {
	    super();
	    this.state = {
	    	history: [{
	        	squares: Array(9).fill(null)
	      	}],
	      	xIsNext: true
	    };
	}

	render() {
    	return (
      		<div className="game">
        		<div className="game-board">
          			<Board />
        		</div>
        		<div className="game-info">
          			<div>{/* status */}</div>
          			<ol>{/* TODO */}</ol>
        		</div>
      		</div>
    	);
  	}
}

render(<Game />, document.getElementById('root'));

