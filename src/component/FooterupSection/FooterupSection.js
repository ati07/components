import React from "react";
import ConicalSectionabove from "../ConicalSectionabove/ConicalSectionabove";
import ConicalSectionbelow from "../ConicalSectionbelow/ConicalSectionbelow";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import CreateIcon from "@material-ui/icons/Create";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import './FooterupSection.css'

function Footer() {
  return (
    <div className="footer">
      <div>
        <ConicalSectionabove />
        <div className='container'>
          <div className='container_item'>
            <PhonelinkRingIcon />
            <h2>Call Us</h2>

            <p>(361) 249-2608</p>
          </div>
          <div className='container_item'>
            <CreateIcon />
            <h2></h2>
            <p>julia@milkandhoneydigital.com</p>
          </div>
          <div className='container_item'>
            <PersonPinCircleIcon />
            <h2>Visit Us</h2>
            <p>Houston, TX & Corpus Christi, TX</p>
          </div>
        </div>
        <ConicalSectionbelow />
      </div>
    </div>
  );
}

export default Footer;
