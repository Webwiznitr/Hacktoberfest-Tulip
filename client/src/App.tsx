import React from 'react';
import './CSS/index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar'; // Adjust this import path as per your project structure

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* This line adds the Navbar to your app */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
