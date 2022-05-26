import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/heroSection/HeroSection';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/loader/Loader';

function App() {
  const [showLoader, setShowLoader]=useState(true)
  useEffect(()=>{
    setTimeout(()=>setShowLoader(false),10000)
  })
  return (
    <div className="App">
      {showLoader?(<Loader/>):(
        <>
       <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/> 
      </>
      )}
      
    </div>
  );
}

export default App;
