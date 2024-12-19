import { React } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faMoneyBillWave, faTrophy } from "@fortawesome/free-solid-svg-icons";


export default function Important () {
        return(
              <div>
              <section className="section3">
  <div className="important">
    <h1 className="things">
      important things
      <br /> to note...
    </h1>
    <div className="pricing">
      <ul>
        <FontAwesomeIcon icon={faMoneyBillWave}
          className="fa-solid fa-money-bill-wave fa-2xl "
          style={{ color: "red" }}
        />
        <li className="pri">Pricing</li>
        <li>
          Audition forms are available for <br />
          ₦1,000 for single contestants,
          <br />
          and ₦1,500 for a group of five
        </li>
      </ul>
    </div>
    <div className="prizes">
      <ul>
        <FontAwesomeIcon icon={faTrophy}
          className="fa-solid fa-trophy fa-2xl "
          style={{ color: "red" }}
          fontSize="50px"
        />
        <li className="piz">Prizes</li>
        <li>
          <b>1st Prize:</b> ₦2,000,000
        </li>
        <li>
          <b>2nd Prize:</b> ₦1,000,000
        </li>
        <li>
          <b>3rd Prize:</b> ₦500,000
        </li>
      </ul>
    </div>
  </div>
</section>

              
              </div>

        );
}