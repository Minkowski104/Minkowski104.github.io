import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './components/modal';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Test from './pages/test';

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </Router>
  );
}

export default App;
