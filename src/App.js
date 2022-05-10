import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Fun from './components/Fun';
import ReadingfulMoments from './components/ReadingfulMoments';
import PostUp from './components/PostUp';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/readingful-moments/" element={<ReadingfulMoments />}></Route>
          <Route path="/postup/" element={<PostUp />}></Route>
          <Route path="/fun/" element={<Fun />}></Route>
          <Route path="/about/" element={<About />}></Route>
        </Routes>
        <Footer />
    </Router>
  );
}