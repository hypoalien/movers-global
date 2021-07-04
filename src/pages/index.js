import React, { useState } from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../components/Data';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';

function Home() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    
    return (
      <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle}/>
        <HeroSection/>
        <ServicesSection/>
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Footer/>

    
        

       
      </>
    );
  }
  
  export default Home;