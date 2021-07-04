import React, { useState } from 'react';
import Header from "../components/Header";
import BlogInfoSection from '../components/BlogInfoSection';
import Sidebar from "../components/Sidebar";
import {
  homeObjOne,
  homeObjFour
  
} from '../components/Data';
import Footer from '../components/Footer';

function Blogs() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    
    return (
      <>
          <Header toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle} />

        <BlogInfoSection {...homeObjOne}/>
        <BlogInfoSection {...homeObjFour}/>
        <Footer/>

       
      </>
    );
  }
  
  export default Blogs;