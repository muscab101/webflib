import React from 'react'
import ContactPage from '../_components/ContactPage'
import DashboardNavbar from '../_components/NavbarPage'
import Footer from '@/app/_components/Footer'

const page = () => {
  return (
    <div>
        <DashboardNavbar/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default page
