// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SubmitRequest from './pages/SubmitRequest';
import Track from './pages/Track';
import Contact from './pages/Contact';
// import { useState } from 'react';
// import HeroSection from "./components/HeroSection";



function App() {
  

  return (
   <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/SubmitRequest' element={<SubmitRequest />} />
      <Route path='/Track' element={<Track />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    {/* <HeroSection/> */}
   

    <Footer />
   </>
   
  );
}

export default App;
