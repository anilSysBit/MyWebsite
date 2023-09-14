import React from 'react'

const ContactUs = () => {
  return (
    <div className="contact_aw_container" id='contact'>
        <div className="size_manager">
            <div className="header">
                <p>-LET'S CONNECT</p>
                <h1>Get in touch</h1>
                <p className='contact_desc'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>

                <ul className="detail">
                    <li>+977 9816284342</li>
                    <li>anil.wagle808@gmail.com</li>
                    <li>Khairahani-1,Chitwan,Nepal</li>
                </ul>
            </div>
            <form action="#">
                <div className="form_control">
                    <input type="text" name='name' placeholder='Enter your name' />
                </div>
                <div className="form_control">
                    <input type="email" name='email' placeholder='example@gmail.com'/>
                </div>
                <div className="form_control">
                    <textarea name="message" id="" cols="30" rows="30" placeholder='Write Something......'></textarea>
                </div>
                <br/>
                    <button type='submit' className='global_button_fill'>Submit now</button>
            </form>
        </div>
        <div className="contact_gmap_container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.92731655490562!2d84.54915155656634!3d27.629562499364855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e9c413bcb537%3A0x582d089925682f95!2sBhupu%20Sainik%20Grocery%20Pasal!5e0!3m2!1sen!2snp!4v1694700318634!5m2!1sen!2snp" width="600" height="450"loading="lazy" ></iframe>
        </div>
    </div>
  )
}

export default ContactUs