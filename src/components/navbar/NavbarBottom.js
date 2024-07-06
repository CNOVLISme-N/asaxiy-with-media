import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { IoLanguageOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function NavbarBottom() {
    return (
        <div className='main_NavbarBottom'>
            <div className="container">
                <div className="navbarBottom">
                    <Link to={'/'} className="navBottomItem">
                        <span><IoHomeOutline /></span>
                    </Link>
                    <Link to={'/like'} className="navBottomItem">
                        <span><IoMdHeartEmpty /></span>
                    </Link>
                    <Link to={'/cart'} className="navBottomItem">
                        <span><IoCartOutline /></span>
                    </Link>
                    <Link to={'/login'} className="navBottomItem">
                        <span><RiUserLine /></span>
                    </Link>
                    <div className="navBottomItem">
                        <span><IoLanguageOutline /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarBottom