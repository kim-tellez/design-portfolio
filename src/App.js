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
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
            <Route path="/design-portfolio/" element={<Home />}></Route>
            <Route path="/design-portfolio/readingful-moments/" element={<ReadingfulMoments />}></Route>
            <Route path="/design-portfolio/postup/" element={<PostUp />}></Route>
            <Route path="/design-portfolio/fun/" element={<Fun />}></Route>
            <Route path="/design-portfolio/about/" element={<About />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}