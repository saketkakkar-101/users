import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Carousal from '../components/Carousal'

function Home() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='mt-3'></div>
      <div><Carousal/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Home
