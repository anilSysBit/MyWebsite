import React from 'react'

const Homepage = () => {
  return (
    <div className="homepage_container">
      <div className="internal_space">
      <div className="image_container">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/developer-2143200-1801815.png" alt="profile-image" />
        </div>
        <div className="data_container">
          <h1>Hi, I'm <span>Anil!</span><br/> Fullstack Web Developer <br/>from Nepal</h1>
          <p>I am Nepal based Web Developer with Sufficient Trainings</p>
          <div className="button_container">
            <button className='global_button_fill'>Got a Project?</button>
            <button className='global_button_nofill'>Let's talk</button>
          </div>

          <div className="location_details">
            <p>+977 9816284342</p>
            <p>anil.wagle808@gmail.com</p>
            <p>Khairahani-1, Chitwan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage