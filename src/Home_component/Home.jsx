import React from 'react'
import './home.css'
import Slide from './Slide_component/slide';
import Homeproduct from './HomeProduct_component/homegoods'
import Footer from './Footer_component/footer'

const Home = () => {
  return (
    <> 
      <Slide  />
      <Homeproduct />
      <p>What is wrong</p>
      <Footer />
    </>   
  )      
}           

export default Home
