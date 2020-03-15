import React from 'react';
import './App.css';
import Wallet from './components/Wallet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Loot Check</h2>
        <hr />
        <Wallet />
      </header>
    </div>
  );
}

export default App;
