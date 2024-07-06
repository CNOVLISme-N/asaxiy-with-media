import React from 'react'
import Navbar from './Navbar'
import MiddleNavbar from './MiddleNavbar'
import BottomNavbar from './NavbarBottom'
function MainNavbar() {
    return (
        <div>
            <Navbar/>
            <MiddleNavbar />
            <BottomNavbar />
        </div >
    )
}

export default MainNavbar