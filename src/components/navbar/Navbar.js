import React from 'react'
import './Navbar.css'
import asaxyiLogo from '../../assets/asaxiy-logo.svg'
import { IoMenu } from "react-icons/io5";
import compare_header from '../../assets/compare_header.svg'
import payment from '../../assets/payment.png'
import trek from '../../assets/trek.png'
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoLanguage } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { LuCreditCard } from "react-icons/lu";
import { PiCarProfile } from "react-icons/pi";

function Navbar() {
    return (
        <div className='main_navbar' >
            <div className="container">
                <div className="navbar">
                    <div className="nav_collection">
                        <Link to={'/'} className="nav_item">
                            <img className='nav_logo' src={asaxyiLogo} alt="" />
                        </Link>
                        <li className="nav_item menu_button">
                            <span><IoMenu /></span>
                            <p>Bo'limlar</p>
                        </li>
                        <li className="nav_item input_btn_search ">
                            <input className='navbar_inp' type="text" placeholder='Qidirish...' />
                            <button >Qidirish</button>
                        </li>

                        <li className="nav_item navbar_icon">
                            <span className='nav_icn'><LiaBalanceScaleSolid /></span>
                            <p className='p_text'>Taqqoslash</p>
                        </li>

                        <li className="nav_item navbar_icon">
                            <span className='nav_icn'>
                                <span className='nav_icn'><LuCreditCard /></span></span>
                            <p className='p_text'>To'lov</p>
                        </li>
                        <li className="nav_item navbar_icon">
                            <span className='nav_icn'><PiCarProfile /></span>
                            <p className='p_text'>Trek</p>
                        </li>
                        <Link to={'/card'} className="nav_item navbar_icon">
                            <span className='nav_icn'><IoCartOutline /></span>
                            <p className='p_text'>Savatcha</p>
                        </Link>
                        <Link to={'/like'} className="nav_item navbar_icon">
                            <span className='nav_icn'><GoHeart /></span>
                            <p className='p_text'>Sevimlilar</p>
                        </Link>
                        <li className="nav_item navbar_icon">
                            <span className='nav_icn'><IoLanguage /></span>
                            <p>Language</p>
                        </li>
                        <Link to={'/login'} className="nav_item navbar_icon">
                            <span className='nav_icn'><RiUserLine /></span>
                            <p className='p_text'>Kirish</p>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar