import React from 'react'
import './Banner.css'
import BannerPhoto from '../../assets/664c69b88f69f.jpg.webp'
import tecno from '../../assets/tecno.webp'
import galaxiy_a15 from '../../assets/galaxiy A15 asxiy.webp'
import konditsaner from '../../assets/666808f54989a.webp'
import galaxiy_buds from '../../assets/galaxiy Buds 2.webp'
import dazmol from '../../assets/dazmol.webp'

function Banner() {
    return (
        <div className='mainBanner'>
            <div className="container">
                <div className="banner">
                    <div className="bannerChild">
                        <img src={BannerPhoto} alt="" />
                    </div>
                    <div className="bannerChild bannerCard">
                        <div className="bannerChild_Card">

                            <img src={tecno} alt="" />
                            <div className="bannerCard_text">
                                <p>TECNO Camon 30</p>
                                <p>8/256GB Iceland Basaltic ...</p>
                            </div>

                            <div className="price_foiz">
                                <del>3229000</del>
                                <span>5%</span>
                            </div>
                            <div className="price_stars ">
                                <p>3099000</p>
                                <p>⭐5</p>
                            </div>

                            <button className='bannerChild_btn' >07.07 2024</button>

                        </div>
                        <div className="bannerChild_Card">

                            <img src={galaxiy_a15} alt="" />
                            <div className="bannerCard_text">
                                <p>Samsung Galaxy A15</p>
                                <p> 6/128GB Blue Smartfoni ...</p>
                            </div>

                            <div className="price_foiz">
                                <del>203900</del>
                                <span>14%</span>
                            </div>
                            <div className="price_stars ">
                                <p>1769000</p>
                                <p>⭐5</p>
                            </div>

                            <button className='bannerChild_btn' >08.07 2024</button>

                        </div>
                        <div className="bannerChild_Card">

                            <img src={konditsaner} alt="" />
                            <div className="bannerCard_text">
                                <p>TCL Elite E3 18</p>
                                <p>Inverter konditsioneri. B...</p>
                            </div>

                            <div className="price_foiz">
                                <del>6039000</del>
                                <span>4%</span>
                            </div>
                            <div className="price_stars ">
                                <p>4199000</p>
                                <p>⭐5</p>
                            </div>

                            <button className='bannerChild_btn' >15.07 2024</button>

                        </div>
                        <div className="bannerChild_Card">

                            <img src={galaxiy_buds} alt="" />
                            <div className="bannerCard_text">
                                <p>TECNO Camon 30</p>
                                <p>8/256GB Iceland Basaltic ...</p>
                            </div>

                            <div className="price_foiz">
                                <del>3229000</del>
                                <span>5%</span>
                            </div>
                            <div className="price_stars ">
                                <p>3099000</p>
                                <p>⭐5</p>
                            </div>

                            <button className='bannerChild_btn' >07.07 2024</button>

                        </div>
                        <div className="bannerChild_Card">

                            <img src={dazmol} alt="" />
                            <div className="bannerCard_text">
                                <p>RAF R.1252G dazmoli</p>
                                <p>8/256GB Iceland Basaltic ...</p>
                            </div>

                            <div className="price_foiz">
                                <del>3229000</del>
                                <span>5%</span>
                            </div>
                            <div className="price_stars ">
                                <p>3099000</p>
                                <p>⭐5</p>
                            </div>

                            <button className='bannerChild_btn' >07.07 2024</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner