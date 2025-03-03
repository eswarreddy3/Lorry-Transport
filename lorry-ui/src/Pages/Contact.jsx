import React from 'react';
import '../Styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faBus, faPerson } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <>
      <p>1</p>
      {/* <div className="container-top"></div> */}
      <div className="contactContainer">
        <h1 className="headabout display-4 fw-bold">Reach Us</h1>
        <div className="content">
          <div className="contactInfo">
            <section className="ownerInfo">
              <h3 className="paraContact"><FontAwesomeIcon className="icon" icon={faBus} />Sri Sai Tejaswi Lorry Service</h3>
            </section>
            <section className="ownerInfo">
              <p className="paraContact"><FontAwesomeIcon className="icon" icon={faPerson} /> Proprietor: 
              </p>
              <p className="paraContact" style={{ marginLeft: '50px' }}> K.Nagireddy,</p>
              <p className="paraContact" style={{ marginLeft: '50px' }}> K.Siva Rama Krishna Reddy</p>
            </section>
            <section className="ownerInfo">
              <p className="paraContact"><FontAwesomeIcon className="icon" icon={faPhone} /> Phone:<a href="tel:+919347357455"> <span style={{color:'black'}}>+91 9347357455</span></a></p>
            </section>
            <section className="ownerInfo">
              <p className="paraContact"><FontAwesomeIcon className="icon" icon={faMapMarkerAlt} /> Near Kallam College, Guntur-Chennai Hwy, Dasaripalem, Andhra Pradesh 522019 India</p>
            </section>
            <a href="https://wa.me/919347357455?text=I'm%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer">
                <button className="whatsappButton">Contact Us on WhatsApp</button>
              </a>
          </div>
          <div className="mapArea">
            <a href="https://maps.app.goo.gl/YtzkGZYFKFQ9Nj7U6" target="_blank">
              <h2 style={{color:'black'}}>Locate Us <FontAwesomeIcon icon={faMapMarkerAlt} /></h2>
              <iframe src="https://www.google.com/maps/embed?pb=!4v1739268517796!6m8!1m7!1sWQ3hWh8ByLLELsE4rfWoHw!2m2!1d16.25554373876932!2d80.33681281163777!3f195.7448045944573!4f6.025420394054393!5f0.7820865974627469"
                style={{ width: '100%', height: '100%', border: '0' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
