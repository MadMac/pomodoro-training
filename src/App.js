import React, { Component } from 'react';
import './App.css';

import Timer from './components/timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Pomodoro
        </header>
        <div className="timer-container">
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
