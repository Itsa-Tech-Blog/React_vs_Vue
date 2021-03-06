import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar/SideBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="right-side-container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
