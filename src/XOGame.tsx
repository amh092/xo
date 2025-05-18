import React, { useState, useMemo, useCallback } from 'react';
import './XOGame.css';

// Memoized Square component to avoid unnecessary re-renders
interface SquareProps {
  value: string | null;
  onClick: () => void;
}
const Square: React.FC<SquareProps> = React.memo(({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
});

const XOGame: React.FC = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Memoize the winner calculation so it only runs when board changes
  const winner = useMemo(() => calculateWinner(board), [board]);

  // Memoize the click handler
  const handleClick = useCallback(
    (index: number) => {
      if (board[index] || winner) return;
      const newBoard = board.slice();
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setIsXNext(!isXNext);
    },
    [board, isXNext, winner]
  );

  // Render a single square, pass memoized onClick handler
  const renderSquare = (index: number) => (
    <Square value={board[index]} onClick={() => handleClick(index)} />
  );

  const status =
    winner === 'draw'
      ? 'Draw!'
      : winner
      ? `Winner: ${winner}`
      : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className={`status ${status === 'Draw!' ? 'draw' : ''}`}>{status}</div>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Winner calculation function stays the same
function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every((square) => square !== null)) {
    return 'draw';
  }
  return null;
}

export default XOGame;
