import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * Renders a button.
 *
 * @param {void} - Nothing.
 * @return {void} - Nothing.
 */
class Square extends React.Component {

  // Initialize class state.
  constructor(props) {
    super(props);  // Call super() when defining constructor in subclass.
    this.state = {
      value: null,
    };

  }

  render() {
    return (
      // <button className="square" onClick={function() { alert('click'); }}>
      // Arrow function syntax.
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {/* {this.props.value} */}
        {this.state.value}
      </button>
    );
  }
}

/**
 * Renders 9 squares.
 *
 * @param {void} - Nothing.
 * @return {void} - Nothing.
 */
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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
}

/**
 * Renders a board.
 *
 * @param {void} - Nothing.
 * @return {void} - Nothing.
 */
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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
