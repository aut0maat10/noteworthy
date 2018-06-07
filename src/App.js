import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React & Firebase Noteworthy App</h1>
        <Note />
      </div>
    );
  }
}

export default App;
