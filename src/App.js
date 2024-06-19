import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css'
import CGWA from './pages/CGWA';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/cgwa" element={<CGWA />} />
          {/* Add more routes here */}
        </Routes>
      </DashboardLayout>
    </Router>
    
  );
}

export default App;
