
import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
        <div className='footer-logo'>
            <img src={logo} alt=""/>
        </div>

        {/* copyright */}
        <div className='footer-cpyright'>
            <p>
                © - 2024 All Right reserved 
            </p>
        </div>

        {/* social */}
        <ul className='footer-social-media'>
            <li>
                <a href="https://www.linkedin.com/in/prit-monpara-aa5164247/">
                    <i className='fa-brands fa-facebook'></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/prit-monpara-aa5164247/">
                    <i className='fa-brands fa-twitter'></i>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/monpara_prit?utm_source=qr&igsh=NGJ0eGk2cjFmNXJ5">
                    <i className='fa-brands fa-instagram'></i>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/">
                    <i className='fa-brands fa-youtube'></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/prit-monpara-aa5164247/">
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer
