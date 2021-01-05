import React from 'react';
import Header from './Components/Header'; 
import Board from './Components/Board'; 

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="App container" style={{marginTop: "20px"}}>
          <Board/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
