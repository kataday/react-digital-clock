import React, { Component } from 'react';
import './App.css';

class DayOfTheWeek extends Component {
  render() {
    return (
      <div className="day-of-the-week">
        <span className="active">SUN</span>
        <span>MON</span>
        <span>TUE</span>
        <span>WED</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
      </div>
    );
  }
}

export default DayOfTheWeek;
