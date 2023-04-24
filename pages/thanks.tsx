import React from 'react'
import Thank from '../component/thankyou/thank'
import Navbar from '../component/navbar/navbar'
import Footer from '../component/footer/footer'
import { Header } from '../component/head/Globalbody'

const thanks = () => {
  return (
    <div>
      <Header title="Thank you"/>
      <Navbar />
            <Thank/>
      <Footer/>
    </div>
  )
}

export default thanks   