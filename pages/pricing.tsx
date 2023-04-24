import React from 'react'
import dynamic from 'next/dynamic';
import Head from 'next/head';
const Navbar = dynamic(() => import("../component/navbar/navbar"));
import Pricing from "../component/webdevelopment/Pricing/pricing";
import Footer from '../component/footer/footer';
import { Header } from '../component/head/Globalbody';

const pricing = () => {
  return (
    <div>
      <Header title="Our Pricing"/>
        <Navbar />
        <div className={` pt-32`}>
        <Pricing />
        <div className={` pt-32`}>
        <Footer />
        </div>
        </div>
    </div>
  )
}

export default pricing