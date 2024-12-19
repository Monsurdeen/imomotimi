import { React } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";



export default function Footer () {

    return (
        <div>
            <footer className="foot">
  <div className="icon">
    <h4>We are Social</h4>
    <FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook face" />
    <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram insta" />
    <FontAwesomeIcon icon={faTwitter} className="fa-brands fa-x-twitter twit" />
    <FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube tube" />
  </div>
  <a href="#">
    {" "}
    <FontAwesomeIcon icon={faArrowUp} className="fa-solid fa-arrow-up arrow" />
  </a>
  <hr />
  <p>©2024 Imomotimi Foundation All Rights Reserved</p>
</footer>

        </div>
    );
}