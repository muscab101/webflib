import React from 'react'
import NavbarPage from '../_components/NavbarPage'
import HeroPage from '../_components/HeroPage'
import Items from '../_components/Items'
import Footer from '@/app/_components/Footer'

const page = () => {
  return (
    <div>
      <NavbarPage/>
      <HeroPage/>
      <Items/>
      <Footer/>
    </div>
  )
}

export default page
