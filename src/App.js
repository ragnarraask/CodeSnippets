import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Snippet from './Snippet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <p>
            Share your best ReactJS snippet
          </p>
         <Snippet/>
        </header>
      </div>
    );
  }
}

export default App;
