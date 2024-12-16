import logo from './logo.svg';
import './App.css';
import React from 'react';
import MenuDisplay from './components/MenuDisplay';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MenuDisplay />
    </div>
  );
}

export default App;
