import React from 'react'
import WebsitesPage from '../_components/WebsitesPage'
import DashboardNavbar from '../_components/NavbarPage'
import Footer from '@/app/_components/Footer'

const page = () => {
  return (
    <main className="min-h-screen bg-background">
        <DashboardNavbar/>
      <WebsitesPage />
      <Footer/>
    </main>
  )
}

export default page