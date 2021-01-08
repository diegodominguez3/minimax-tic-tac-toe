import React, {useState} from 'react';
import Board from './Board';
import Header from './Header'; 

export type SquareValue = 'X' | 'O' | null; 

const Game : React.FC = () =>  {
  const [xIsNext, setXIsNext] = useState<boolean>(true); 
  const [stepNumber, setStepNumber] = useState<number>(0); 
  const [history, setHistory] = useState<{squares: SquareValue[]}[]>([{squares: Array(9).fill(null)}])

  const calculateWinner = (squares:SquareValue[]):SquareValue => {
    const lines = [
      [0,1,2], 
      [3,4,5], 
      [6,7,8], 
      [0,3,6], 
      [1,4,7], 
      [2,5,8], 
      [0,4,8],
      [2,4,6]
    ]; 

    for(let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i]; 
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; 
      }
    }
    return null;
  }; 

  const HandleClick = (i:number): void => {
    const newHistory = history.slice(0, stepNumber + 1); 
    const current = newHistory[newHistory.length - 1]; 
    const squares = current.squares.slice(); 
    if(calculateWinner(squares) || squares[i]) {
      return; 
    }
    squares[i] = xIsNext ? 'X' : 'O'; 
    setHistory(newHistory.concat([{squares: squares}])); 
    setStepNumber(newHistory.length); 
    setXIsNext(!xIsNext); 
  }; 

  const jumpTo = (step: number): void => {
    setStepNumber(step); 
    setXIsNext((step % 2) === 0); 
  }
  
  const current = history[stepNumber]; 
  const winner = calculateWinner(current.squares); 

  const moves = history.map((step, move) => {
    const desc = move ? 
      'Go to move #' + move : 
      'Go to game start'; 
      return (
        <li key={move} className="list-group-item">
          <button className="btn btn-light" style={{width: '100%'}} onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      ); 
  }); 

  let status; 
  if(winner) {
    status = "Winner: " + winner; 
  } else {
    status = "Next player: " + (xIsNext ? 'X' : 'O'); 
  }

  return (
    <React.Fragment>
      <Header/>
      <div className="App container" style={{marginTop: "20px"}}>
        <div className="game row">
          <div className="game-board col-md-9 col-sm-12">
          <h3 style={{textAlign: 'center'}}>{status}</h3>
            <Board
              squares={current.squares}
              onClick={i => HandleClick(i)}
            />
          </div>
          <div className="game-info col-md-3 col-sm-12 borderless">
            <ol className="list-group">{moves}</ol>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Game;
