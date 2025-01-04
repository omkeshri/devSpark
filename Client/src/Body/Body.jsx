import React from 'react'
import NavBar from '../Common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer'

const Body = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body