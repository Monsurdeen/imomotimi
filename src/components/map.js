import { React } from "react"
import Image from "next/image"


export default function Map({theme}) {


  const Imagesrc = (theme === "dark" ? "/shape-top-dark-grey-80.png" : "/shape-top-white-80.png")

  return (
    <div>

      <section>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63600.816879968996!2d6.279765591310233!3d4.93111524649201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a055be1dcce59%3A0xa6c5b6a97ac6c1a!2sNitro%20Studios!5e0!3m2!1sen!2sng!4v1727701488159!5m2!1sen!2sng"
            width={2000}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <Image
            src={Imagesrc}
            alt="top grey"
            className="img3"
            id="bottomdark"
            width={1000}
            height={100}
          />
        </div>
      </section>


    </div>

  );

}