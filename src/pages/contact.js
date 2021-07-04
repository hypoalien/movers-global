import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactHeroSection from '../components/ContactHeroSection';
import Footer from '../components/Footer';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Contact() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    
    return (
      <>
          <Header toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle} />

        <ContactHeroSection/>
        <ContactForm/>
        <Footer/>
        
      </>
    );
  }
  
  export default Contact;