import React from 'react'
import bannerPhoto1 from '../../assets/banner.c.jpg.webp'
function MiddleBanner() {
    return (
        <div className='container'>
            <div className="main-banner-category">
                <div className="category-child">
                    <img src={bannerPhoto1} alt="" />
                </div>
                <div className="category-child"></div>
                <div className="category-child"></div>
            </div>
        </div>
    )
}

export default MiddleBanner