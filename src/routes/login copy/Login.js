import React from 'react'
import './Login.css'
import Footer from '../../components/footer/Footer'
function Login() {
    return (
        <div className='login'>
            <div className="container">
                <div className="signUp">
                    <h3>LOGIN</h3>
                    <input className='login_btn' type="text" placeholder='Username' />
                    <input className='login_btn log_btn' type="password" placeholder='password' />
                    <div className="checbox">
                        <div className="checx_div">
                            <input type="checkbox" />Remeber me
                        </div>
                        <span>Forgot</span>
                    </div>
                    <button className='login_btn btn_login'><b>LOGIN</b></button>
                </div>
            </div>
        </div>
    )
}

export default Login