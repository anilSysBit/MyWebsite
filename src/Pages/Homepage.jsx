import React from 'react'
import SideBarMobile from '../Components/SideBarMobile'
import resume from '../assets/MY_RESUME.pdf'

const Homepage = () => {

  return (
    <div className="home_main_container" id='home'>
      <span className='abouttag' id='about'></span>
          <div className="homepage_container">
      <div className="internal_space">
      <div className="image_container">
          <img src="https://codemen.org/assets/images/WebDesignDevelopmentVector.png" alt="profile-image" />
        </div>
        <div className="data_container">
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
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homepage