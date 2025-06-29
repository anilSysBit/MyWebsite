import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import myimage from '../assets/ishanbhai.jpg'
// Side Bar That contains the Navigation and  Social Media Tags and Copyright Details
// Resopnsive side bar opens after its gets its size
// Responsive side bar opens from right-left

/*
                            Profile Icon
                            
                            Person Name


                        Home
                        About
                        Services
                        Contact



                    facebook linkedin Github Twitter
                    
                    Copyright Details
*/

const SideBar = () => {
  return (
    <div className="sidebar_container">
        <div className="size_manager">

            <div className="thumbnail_box">
                <div className="img_box">
                    <img src={myimage} alt="thumbnail_sidebar" />
                </div>
                <div className="name_box">
                    <h2>Ishan Bartuala</h2>
                </div>
            </div>

            <div className="navigation_container">
                <ul>
                    <li><a href="#home" className='active'>Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="copyright_container">
                <div className="social_media_handle">
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100005517855446"><FacebookIcon/></a>
                    <a target='_blank' href="https://github.com/IshanSysBit"><GitHubIcon/></a>
                    <a target='_blank' href="https://twitter.com/Ishan_code_808"><TwitterIcon/></a>
                    <a target='_blank' href="https://www.linkedin.com/in/Ishan-wagle-a09609224/"><LinkedInIcon/></a>
                </div>
                <p>Copyright©2023.Ishan Bartuala.<br/>All rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar