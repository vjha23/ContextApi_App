import React from 'react'
import './App.css';
import Home from './Home';
import Sidebar from './Sidebar';
import Modal from './Modal';

function App() {
  return (
    <div className="app">
      <Home />
      <Sidebar />
      <Modal />
    </div>
  );
}

export default App;
