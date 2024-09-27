import React from 'react'
import MyAvatar from '../assets/myppimage.jpg'

const TopBar = () => {
  return (
    <nav className="top_bar_container">

        <ul>
        <div className="logo">
            <img src={MyAvatar} alt="" />
        </div>
        <li><a href="#home" className='active'>HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#contact">CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default TopBar