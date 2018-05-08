import React, { Component } from 'react';

import './App.css';

import DayOfTheWeek from './DayOfTheWeek';
import Digits from './Digits';

class App extends Component {
  render() {
    return (
      <div id="clock" className="light">
        <div className="display">
          <DayOfTheWeek />
          <Digits />
        </div>
      </div>
    );
  }
}

export default App;
