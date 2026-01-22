import React from 'react'
import Navbar from '../components/Navbar'
import Frontpage from '../components/Frontpage'
import Working from '../components/Working'
import Categories from '../components/Categories'
import Founder from '../components/Founder'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div >
     
     
      <Navbar/>
      
      <Frontpage/>
      
      <Working/>
      <Categories/>
      <Founder/>
      <Footer/>
      
    </div>
  )
}

export default Homepage
