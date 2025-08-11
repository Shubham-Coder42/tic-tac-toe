export default function GameBoard({ onSelectSquare, board}) {
 

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSquareClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const newBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //     newBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return newBoard;
  //   });

  //   onSelectSquare();
  // }
  

  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
