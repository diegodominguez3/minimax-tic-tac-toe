import React from 'react'; 
import {SquareValue} from './Game'; 

interface SquareProps {
    value: SquareValue;
    onClick(): void; 
}

const Square: React.FC<SquareProps> = props => {
    return (
        <div className="square" onClick={props.onClick}>
            {props.value}
        </div>
    ); 
}

export default Square; 