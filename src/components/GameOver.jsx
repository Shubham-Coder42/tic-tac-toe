export default function GameOver({ winner, isDraw, reStart }) {
    return (

        <>
            <div id="game-over">
                <h2>Game Over!</h2>
                {winner && <p>{winner.toUpperCase()} Won the Match!</p>}
                {isDraw && <p>Oops!, it's a {isDraw}!</p>}
                <button onClick={reStart}>Play Again</button>
            </div>
        </>
    )
}
