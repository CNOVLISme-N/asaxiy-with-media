import React from 'react'
import { DATA } from '../../static/index'
import { useParams } from 'react-router-dom'
import './SingleRoute.css'
import { BiComment } from "react-icons/bi";
import { ImConnection } from "react-icons/im";
import UzumNasiya from '../../assets/uzumnasiya.svg'
import iphone1 from '../../assets/650eb838ad94c.png.webp'
import iphone2 from '../../assets/650eb8f608736.png.webp'
import iphone3 from '../../assets/650eba5e34d71.png.webp'
import iphone4 from '../../assets/650eba5e34d71.png.webp'
function SingleRoute() {

    const param = useParams()
    console.log(param);

    const item = DATA.find((item, index) => item.id === param.id)
    console.log(item);

    return (
        <div>
            <div className="container">

                <div className='main_singleRoute'>

                    <div className="singlRoute">
                        <img className='sing_img' src={item.url[0]} alt="" />
                    </div>

                    <div className="singleRout padd_Top">
                        <h3>{item.title}</h3>
                        <div className="singRoute-stars">
                            <div className='comment-stars'>
                                <span>⭐⭐⭐⭐⭐</span>
                                <p><BiComment /> 0 ta sharh</p>
                            </div>

                            <div className="conection-icn sing-none-icn">
                                <p><ImConnection /></p>
                                <b>Ualnish</b>
                            </div>

                        </div>

                        <del className='single-del'>16 959 000 so'm</del>
                        <h2 className='single-price'>{item.price} so'm</h2>
                        <a href=''>12 oy bo'lib to'lashg</a>

                        <div className="img-catgory">
                            <div className="">
                                <img src={iphone1} alt="" />
                            </div>
                            <div className="">
                                <img src={iphone2} alt="" />
                            </div>
                            <div className="">
                                <img src={iphone3} alt="" />
                            </div>
                            <div className="">
                                <img src={iphone4} alt="" />
                            </div>

                        </div>

                    </div>

                    <div className="singleRout bolib_tolash">
                        <h3>Bo'lib to'lash</h3>
                        <div className="single-buttons">
                            <button>6 oy</button>
                            <button>12 oy</button>

                        </div>

                        <div className="nasiya-tolov">
                            <p>UzumNasiya hamkorining muddatli to'lovi</p>
                            <div className="uzum-nasiya">
                                <img src={UzumNasiya} alt="" />
                                <p>0 000 000 so'm</p>
                            </div>
                            <div className="qiymat">
                                <span>Umumiy qiymat : <b>{item.price}</b></span>
                            </div>

                            <button className='nasiya-btn'>bo'lib to'lashga olish</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRoute