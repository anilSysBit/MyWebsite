import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                    <img src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/350473407_1192554214752764_1506484405097880996_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XF6D9BuPF_IAX9TdEXZ&_nc_oc=AQl0ooTkPOFQJZTuBEH06UsGHefcCUDsMNPm3PVUg5XtXAseA5eM2J7niMv0PhUdQf8&_nc_ht=scontent.fktm16-1.fna&oh=00_AfD3j94ZB-ED0ODKFlK2xDE-d8OLgDnBvvZEAa_v2cmFFw&oe=64EDE32E" alt="thumbnail_sidebar" />
                </div>
                <div className="name_box">
                    <h2>Anil Wagle</h2>
                </div>
            </div>

            <div className="navigation_container">
                <ul>
                    <li><a href="#" className='active'>Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="copyright_container">
                <div className="social_media_handle">
                    <a href="#"><FacebookIcon/></a>
                    <a href="#"><GitHubIcon/></a>
                    <a href="#"><TwitterIcon/></a>
                    <a href="#"><LinkedInIcon/></a>
                </div>
                <p>Copyright©2023.Anil Wagle.<br/>All rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar