import React,{useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactUs = () => {
    const [toastActive,setToastActive] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_0131bml', 'template_179bx7j', form.current, 'pTqcXQ4a0Q5Dl9F5Q')
        .then((result) => {
            setToastActive(true);
            form.current.reset();
            toast.success('Form submitted successfully!', {
                position: 'top-right',
                autoClose: 3000, // Close the toast after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }, (error) => {
            toast.error('Error, Form Declined', {
                position: 'top-right',
                autoClose: 3000, // Close the toast after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        });
    };
  return (
    <div className="contact_aw_container" id='contact'>
        <div className="size_manager">
            <div className="header">
                <p>-LET'S CONNECT</p>
                <h1>Get in touch</h1>
                <p className='contact_desc'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>

                <ul className="detail">
                    <li onClick={()=>window.location.href='tel:+9779816284342'}>+977 9816284342</li>
                    <li onClick={()=>window.location.href = 'mailto:anil.wagle808@gmail.com'}>anil.wagle808@gmail.com</li>
                    <li>Khairahani-1,Chitwan,Nepal</li>
                </ul>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form_control">
                    <input type="text" name='user_name' placeholder='Enter your name' required/>
                </div>
                <div className="form_control">
                    <input type="email" name='user_email' placeholder='example@gmail.com' required/>
                </div>
                <div className="form_control">
                    <textarea name="message" id="" cols="30" rows="30" placeholder='Write Something......' required></textarea>
                </div>
                <br/>
                    <button type='submit' className='global_button_fill'>Submit now</button>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        />
            </form>
        </div>
        <div className="contact_gmap_container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.92731655490562!2d84.54915155656634!3d27.629562499364855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e9c413bcb537%3A0x582d089925682f95!2sBhupu%20Sainik%20Grocery%20Pasal!5e0!3m2!1sen!2snp!4v1694700318634!5m2!1sen!2snp" width="600" height="450"loading="lazy" ></iframe>
        </div>
    </div>
  )
}

export default ContactUs