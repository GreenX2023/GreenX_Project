import React from 'react';
import logo from './images/image.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="openingDiv">
          <a href="https://demoapppgreen.auth.us-east-1.amazoncognito.com/login?client_id=7e1ok10autrmdlh74bvgkjgrr6&response_type=code&scope=email+openid&redirect_uri=http://localhost:3000">LOGIN</a>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to GreenX</p>
      </header>
    </div>
  );
}

export default App;
