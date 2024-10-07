import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './routs/Home';
import About from './routs/About';
import Movies from './routs/Movies';
import Users from "./routs/Users";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.scss';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
