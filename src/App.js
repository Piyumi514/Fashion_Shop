// src/App.js
import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage'; 
import ForthPage from './components/ForthPage';
import FifthPage from './components/FifthPage';
import SixthPage from './components/SixthPage';
import SeventhPage from './components/SeventhPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <SecondPage />
      <ThirdPage /> 
      <ForthPage /> 
      <FifthPage/>
      <SixthPage />
      <SeventhPage />
    </div>
  );
}

export default App;
