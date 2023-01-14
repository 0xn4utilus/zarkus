import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home';
import About from './components/about';
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
    </div>
  );
}

export default App;
