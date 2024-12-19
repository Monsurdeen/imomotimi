import React  from "react"
import Image from "next/image"
import ReactDOM from 'react-dom'
import AliceCarousel from "react-alice-carousel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faToggleOff,faSun, faBars, faTimes, faPhone, faComputerMouse, faDownload, } from '@fortawesome/free-solid-svg-icons'





export default function Header({theme}) {

    const Imagesrc = (theme === "dark" ? "/shape-top-black-80.png":"/shape-top-white-80.png")
    return (
        <div>
           <div className="cart">
           <AliceCarousel
  autoPlay
  autoPlayInterval={3000}
  infinite
  disableDotsControls
  disableButtonsControls
  className="owl-carousel"
>

    <div className="bg1" />
    <div className="bg2" />
    <div className="bg3" />
  </AliceCarousel>

  </div>
            {/* Hello world */}
            <section className="section1">
                {/* header container */}
                <header className="main-header">
                    <div className="logo">
                        {" "}
                        <Image src="/logo.png" alt="ijaw logo" width={50} height={50} />
                    </div>
                    {/* navigation bar */}
                    <nav>
                        <ul>
                            <li>
                                <a href="#">intro</a>
                            </li>
                            <li>
                                <a href="#">countdown</a>
                            </li>
                            <li>
                                <a href="#">note</a>
                            </li>
                            <li>
                                <a href="#">location</a>
                            </li>
                            <li>
                                <a href="#">contact</a>
                            </li>
                        </ul>
                    </nav>
                 
                    <div>
                        <FontAwesomeIcon icon={ faBars}className="fa-solid fa-bars" id="bar" />
                        <FontAwesomeIcon icon={ faTimes} className="fa-solid fa-times" id="fa-times" />
                    </div>
                    <button className="button1">
                        call us
                        <FontAwesomeIcon icon={ faPhone} className="fa-solid fa-phone" />
                    </button>
                </header>
                <div className="first-text">
                    <p className="imo">imomotimo foundation present</p>
                    <h1 className="h1">imomotimi ijaw</h1>
                    <h1 className="h11">Dance contest 2024</h1>
                    <button className="button2">
                        {" "}
                        Download entry form <FontAwesomeIcon icon={ faDownload} className="fa-solid fa-download" />
                    </button>
                    <p className="all">
                        All duly filled out forms and the entry fees should be brought along to
                        the audition
                    </p>
                </div>
                <FontAwesomeIcon icon={ faComputerMouse} className="fa-solid fa-computer-mouse mouseicon" />
                <Image
                    src={Imagesrc}
                    alt="topwhite"
                    className="img1"
                    id="topimage"
                    width={1000}
                    height={100}
                />
            </section>
        </div>
    )
}