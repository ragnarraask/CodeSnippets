import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Snippet from './Snippet';
import AddSnippet from './AddSnippet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <p>
            Check out the best ReactJS snippet
          </p>
         <Snippet/>
         <p>
            Share your best ReactJS snippet
          </p>
         <AddSnippet/>
        </header>
      </div>
    );
  }
}

export default App;
