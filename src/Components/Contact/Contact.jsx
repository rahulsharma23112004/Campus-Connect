import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg_icon.png" 
import mail_icon from "../../assets/mail_icon.png" 
import phone_icon from "../../assets/phone_icon.png" 
import loaction_icon from "../../assets/location_icon.png" 
import white_arrow from "../../assets/white_arrow.png"

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e549b527-d2f9-4a2f-9d09-de6472f13e8c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback , questions , and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@campusconnect.dev</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={loaction_icon} alt="" />77 Manchester City <br /> United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
        <label htmlFor="">Your Name</label>
        <input type="text" name='name'  placeholder='Enter your name' required/>
        <label htmlFor="">Phone Number</label>
        <input type="tel" name='phone'  placeholder='Enter your phone number' required/>
        <label htmlFor="">Write your message here</label>
        <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow } alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
