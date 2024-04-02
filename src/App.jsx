import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Reviews from './components/Reviews';
import Cards from './components/Cards';
import CardsTwo from './components/CardsTwo';

function App() {
  return (
    <div className='w-full h-screen bg-[#F1F1F1]'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Reviews/>
      <CardsTwo/>
    </div>
  )
}

export default App;
