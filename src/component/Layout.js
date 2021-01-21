import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Chatwidget from './Chatwidget'
import FloatyBar from './FloatyBar'
import MobileNavbar from './MobileNavbar'
import Navigation from './Navigation'

export default function Layout() {
    return (
        <div>
            <Navigation />
            <Navbar />
            <Header />
            <Chatwidget />
            <FloatyBar />
            <MobileNavbar />
        </div>
    )
}
