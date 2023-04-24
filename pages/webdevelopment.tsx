import React from 'react'
import Web from '../component/innerPage/Webdev'
import Navbar from '../component/navbar/navbar'
import { Header } from '../component/head/Globalbody'

const Webdevelopment = () => {
  return (
    <div>
      <Header title="Web Development"/>
      <Navbar />
        <Web />
    </div>
  )
}

export default Webdevelopment
