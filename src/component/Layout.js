import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Chatwidget from './Chatwidget'
import Newsfeed from '../pages/Newsfeed'
import FloatyBar from './FloatyBar'
import MobileNavbar from './MobileNavbar'
export default function Layout() {
    return (
        <div>
              <Newsfeed/>
           <Navbar/>
           <Header/>
           <Chatwidget/>
           <FloatyBar/>
           <MobileNavbar/>
        </div>
    )
}
