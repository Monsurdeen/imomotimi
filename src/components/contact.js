import { React } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope, faPhoneVolume, faPen, faBook } from "@fortawesome/free-solid-svg-icons";


export default function Contact() {
    return (
           <div>
            <section className="section4">
  <div className="info-form-container">
    {/* Contact Information */}
    <div className="contact-info">
      <h2>For More Information:</h2>
      <p>
        <strong>Hotlines:</strong> 07035973706 &amp; 08108112759
      </p>
      <p>
        <strong>Email:</strong> info@ijawdancecontest.ng
      </p>
      <p>
        <strong>Audition Location:</strong> Nitro Studio, Tamara Hall,
        <br /> Otiotio Road, Yenagoa, Bayelsa State.
      </p>
    </div>
    {/* Form Section */}
    <div className="form-container">
      <div className="input-row">
        <div className="input-icon">
          <FontAwesomeIcon icon={faUser} className="fa-regular fa-user" />
          <input type="text" id="name" name="name" placeholder="Name" />
        </div>
        <div className="input-icon">
          <FontAwesomeIcon icon={faEnvelope} className="fa-regular fa-envelope" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
        </div>
      </div>
      <div className="input-row">
        <div className="input-icon">
          <FontAwesomeIcon icon={faPhoneVolume} className="fa-solid fa-phone-volume" />
          <input type="text" id="phone" name="phone" placeholder="Phone" />
        </div>
        <div className="input-icon">
          <FontAwesomeIcon icon={faBook}  className="fas fa-book" />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
        </div>
      </div>
      <div className="input-icon">
        <FontAwesomeIcon icon={faPen} className="fa-solid fa-pen" />
        <textarea
          id="message"
          name="message"
          placeholder="How can we help you? Feel free to get in touch!"
          defaultValue={""}
        />
      </div>
      <button className="get-in-touch-btn">Get In Touch</button>
    </div>
  </div>
</section>

           </div>
    );
}