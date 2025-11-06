import React, { useMemo, useState } from 'react';

// PUBLIC_INTERFACE
export default function App() {
  /** Root application component rendering a basic Tic Tac Toe board with minimal styling and controls. */
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = useMemo(() => calculateWinner(board), [board]);
  const isDraw = useMemo(() => board.every(Boolean) && !winner, [board, winner]);
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? 'Draw'
    : `Turn: ${xIsNext ? 'X' : 'O'}`;

  function handleClick(i) {
    if (winner || board[i]) return;
    const next = board.slice();
    next[i] = xIsNext ? 'X' : 'O';
    setBoard(next);
    setXIsNext(!xIsNext);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Tic Tac Toe</h1>
        <p className="subtitle">A classic two-player game</p>
      </header>

      <main className="main">
        <div className="status" data-testid="status">{status}</div>

        <div className="board" role="grid" aria-label="Tic Tac Toe Board">
          {board.map((value, idx) => (
            <button
              key={idx}
              role="gridcell"
              aria-label={`Cell ${idx + 1}${value ? `, ${value}` : ''}`}
              className={`square ${value ? 'filled' : ''}`}
              onClick={() => handleClick(idx)}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="controls">
          <button className="reset" onClick={reset}>
            Reset Game
          </button>
        </div>

        <EnvNotice />
      </main>

      <footer className="footer">
        <small>Theme: Light • Primary #3b82f6 • Accent #06b6d4</small>
      </footer>
    </div>
  );
}

/**
 * Calculate Tic Tac Toe winner.
 * @param {Array<string|null>} squares Board state
 * @returns {'X'|'O'|null} winner or null
 */
function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];
  for (const [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function EnvNotice() {
  // Read a couple of env variables in a safe way as a usage example
  const backend = import.meta.env.REACT_APP_BACKEND_URL || '';
  const ws = import.meta.env.REACT_APP_WS_URL || '';

  if (!backend && !ws) return null;

  return (
    <div className="env">
      {backend ? <div><strong>Backend:</strong> {backend}</div> : null}
      {ws ? <div><strong>WebSocket:</strong> {ws}</div> : null}
    </div>
  );
}
