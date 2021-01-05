import React from 'react'; 
import _uniqueId from 'lodash/uniqueId'; 
import Square from './Square'; 
import './Board.css'; 

interface BoardProps {
    board: string[][],
    turn: string;
}

class Board extends React.Component<{}, BoardProps> {
    initialState = {
        board: [['','',''],
                ['','',''],
                ['','','']],
        turn: 'x'
    };

    constructor(props: any, SquareValue: string) {
       super(props); 
       this.state = {...this.initialState};
       this.renderBoard = this.renderBoard.bind(this); 
    }

    renderBoard() {
        const board = this.state.board;
        return (
            board.map(row => {
                return (
                    <div className="row" key={_uniqueId('')}>
                        {
                            row.map(squareVal => {
                                return (
                                    <Square value={squareVal} key={_uniqueId('')}/>
                                )
                            })
                        }
                    </div>
                )
            })
        )
    }

    render() {
        console.log(this.state); 
        return (
            <div className="Board">
                {this.renderBoard()}
            </div>
        )
    }
}

export default Board; 