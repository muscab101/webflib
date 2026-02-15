import React from 'react'
import AboutPage from '../_components/AboutPage'
import DashboardNavbar from '../_components/NavbarPage'
import Footer from '@/app/_components/Footer'

const page = () => {
  return (
    <div>
        <DashboardNavbar/>
      <AboutPage/>
      <Footer/>
    </div>
  )
}

export default page
