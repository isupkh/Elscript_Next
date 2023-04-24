import React from 'react'
import dynamic from 'next/dynamic';
import Contact from '../component/Contact/contact'
const Navbar = dynamic(() => import("../component/navbar/navbar"));
import Footer from "../component/footer/footer";
import Styles from '../styles/contactus.module.css'
import { Header } from '../component/head/Globalbody';



const contact = () => {
  return (
    <div> 
      <Header title="Contact Us"/>
        <Navbar />

        <div className={`${Styles.contact_padding} pt-20 pb-20`}>
        <Contact />
        </div>
        <Footer />
    </div>
  )
}

export default contact