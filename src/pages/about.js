import React, { useState } from 'react';
import InfoSection from '../components/InfoSection';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Faq from '../components/Faq'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  aboutAir,
  aboutSea,
  aboutCustoms
} from '../components/Data';
import AboutHeroSection from '../components/AboutHeroSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import Air from "../images/aircraft.svg";
import Sea from "../images/container.svg";
import Customs from "../images/customs-1.svg";

function About() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    
    return (
      <>
        <Header toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <AboutHeroSection/>
          <InfoSection {...homeObjTwo} />
          <InfoSection {...homeObjThree} />
          <Faq imageSrc={Air} content={aboutAir} heading={"Air Freight"} description={"Efficient airfreight services by MGL (Movers Global LLC) ,On time!"}/>
          <Faq imageSrc={Sea} content={aboutSea} heading={"Sea Freight"} description={"we proud to offer complete ocean logistical solutions driven by local decision making, accountability and expertise"}/>
          <Faq imageSrc={Customs} content={aboutCustoms} heading={"Customs Brokerage"} description={"Our experienced technical experts can help your goods clear quickly and efficiently with our customs-clearance network"}/>

          <Footer/>
          
        
        

       
      </>
    );
  }
  
  export default About;