import React from 'react';
import './App.css';
import LotteryGeneratorForm from './components/LotteryGeneratorForm'

function App() {
  return (
    <div className="App">
        <LotteryGeneratorForm/>
        <div id={'picks'}></div>
    </div>
  );
}

export default App;
