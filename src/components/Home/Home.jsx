import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import Category from '../Category/category.jsx'
import Values from '../Values/Values.jsx'
import Products from '../Products/Products.jsx'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Category />
        <Values/>
        <Products/>
    </div>
  )
}

export default Home