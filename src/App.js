import './App.css';
import React from 'react';
import NavBar from './Pages/Home/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Homescreen';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <NavBar />
              <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="*" element={<div>404 Not Found</div>}></Route>
              </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
