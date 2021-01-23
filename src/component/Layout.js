import React from "react";
import Header from './Header'
import Navbar from './Navbar'
import Chatwidget from './Chatwidget'
import FloatyBar from './FloatyBar'
import MobileNavbar from './MobileNavbar'
import Navigation from './Navigation'
import { BrowserRouter as Router } from 'react-router-dom'

export default function Layout() {

    return (
        <Router>
            <Navigation />
            <Navbar />
            <Header />
            <Chatwidget />
            <FloatyBar />
            <MobileNavbar />

        </Router>
    )
}
