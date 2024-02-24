
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Topbar from "./components/Topbar.js";
import Contact from "./components/Contact.js";
import './App.css';

function App() {
  return (
    <div>

      <Router>
        <Topbar />
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
