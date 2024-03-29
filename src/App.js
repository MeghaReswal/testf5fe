import React from 'react';
import './App.css';
import Navbar from '../src/component/Navbar';
import Home from '../src/component/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      
    </>
  );
}

export default App;
