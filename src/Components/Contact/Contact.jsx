import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail.svg'
import phone_icon from '../../assets/phone.svg'
import location_icon from '../../assets/location.svg'

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "284a5ce1-c9fa-4240-ad5f-87b0a14ff41d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
    };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail"><img src={mail_icon} alt="" /><p>shahabuddin650@gmail.com</p></div>
                    <div className="contact-detail"><img src={phone_icon} alt="" /><p>+880 1680850224</p></div>
                    <div className="contact-detail"><img src={location_icon} alt="" /><p>Dhaka, Bangladesh</p></div>
                </div>
            </div>
            <form className="contact-right" onSubmit={onSubmit}>
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' id='name' />
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" placeholder='Enter your email' />
                <label htmlFor="message">Write your message here</label>
                <textarea name="message" id="message" rows={8} placeholder='Enter your message'></textarea>
                <button className="contact-submit" type='submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact