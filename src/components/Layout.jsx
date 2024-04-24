import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-y-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-hidden">{children}</main>
        <Footer />
    </div>
  )
}

export default Layout