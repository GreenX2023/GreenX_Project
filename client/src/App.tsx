import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="openingDiv">
          <a href="https://authdemoo.auth.us-east-2.amazoncognito.com/login?client_id=9guiqeob9jvn5gjb04oou9dnk&response_type=token&scope=email+openid+phone+profile&redirect_uri=https://www.ex.com/cb">LOGIN</a>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to GreenX</p>
      </header>
    </div>
  );
}

export default App;
