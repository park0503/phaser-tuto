import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import "./PhaserGame"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={Main()}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
