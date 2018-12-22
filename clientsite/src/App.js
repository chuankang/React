import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './pages/test';//引用test组件 命名为Test

class App extends Component {
  //组件
  render() {
    let helloWorld = "欢迎来到召唤师峡谷..."
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {helloWorld}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Test></Test>
        </header>
       
      </div>
    );
  }
}

export default App;
