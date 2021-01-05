import React from 'react';
import './Square.css'

interface SquareProps {value: string}; 

class Square extends React.Component<SquareProps, {}> {
    render() {
        return (
        <div className="Square" style={{width: 'calc(100%/3)'}}>
            <div style={{textAlign: 'center'}}>{this.props.value}</div>
        </div>); 
    }
}

export default Square; 