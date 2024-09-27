import React from 'react'
import SideBarMobile from '../Components/SideBarMobile'
import resume from '../assets/MY_RESUME.pdf'
import ProfileAvatar from '../assets/avatar.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Homepage = () => {

  return (
    <div className="home_main_container" id='home'>
      <span className='abouttag' id='about'></span>
          <div className="homepage_container">
      <div className="internal_space">
      <div className="image_container">
          <img src={ProfileAvatar} alt="profile-image" />
        </div>
        <div className="data_container">
          <div className="data_sm">
            <h1>Hi, I'm <span>Anil!</span><br/> Fullstack Web Developer <br/>from Nepal</h1>
            <p>I am Nepal based Web Developer with Sufficient Trainings</p>
            <div className="button_container">
              <a href={resume} download={resume}><button className='global_button_fill'>Download resume</button></a>
              <a href="#contact"><button className='global_button_nofill'>Let's talk</button></a>
            </div>

            <div className="location_details">
              <a href="tel:+9779816284342"><p>+977 9816284342</p></a>
              <a href="mailto:anil.wagle808@gmail.com"><p>anil.wagle808@gmail.com</p></a>
              <p>Khairahani-1, Chitwan</p>
            </div>

            <div className="social_media_handle">
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=100005517855446"><FacebookIcon fontSize='100'/></a>
                    <a target='_blank' href="https://github.com/anilSysBit"><GitHubIcon fontSize='100'/></a>
                    <a target='_blank' href="https://twitter.com/anil_code_808"><TwitterIcon fontSize='100'/></a>
                    <a target='_blank' href="https://www.linkedin.com/in/anil-wagle-a09609224/"><LinkedInIcon fontSize='100'/></a>
                </div>
        </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Homepage