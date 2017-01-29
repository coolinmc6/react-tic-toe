import React from 'react';
import {render} from 'react-dom';
import Square from './square';
import Board from './board';


// This would normally be my 'App' component

class Game extends React.Component {
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




// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ************************************************************************* //
// 								UNUSED OR OLD CODE
// ************************************************************************* //

// SQUARE
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {/* TODO */}
//       </button>
//     );
//   }
// }

// BOARD
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }
//   render() {
//     const status = 'Next player: X';
//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// RENDER FUNCTION
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// ReactDOM.render(
//   <Game />,
//   document.getElementById('container')
// );
