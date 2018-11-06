import React, { Component } from 'react';
import './App.css';
import PomoTimer from './objects/pomotimer';

import Timer from './components/timer';

const pomoTimer = new PomoTimer();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Pomodoro
        </header>
        <div className="timer-container">
          <Timer pomoTimer={ pomoTimer } />
        </div>
      </div>
    );
  }
}

export default App;
