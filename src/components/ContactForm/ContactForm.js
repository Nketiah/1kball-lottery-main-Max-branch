import React from "react";

import PhoneIcon from "../../images/n_055904.png";
import MailIcon from "../../images/n_61188.png";
import GPSIcon from "../../images/location-black-png-10.png";
import {FaTelegramPlane} from "react-icons/fa"
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          {/* <h1>Get in touch</h1> */}
        </div>
        <div className="row">
          <div className="col-lg-8">
            {/* <form
              action=""
              method="post"
             
              className="php-email-form"
              id="contact-form-unique"
            >
              <div className="row">
               
                <div className="col form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name-unique"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-unique"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    id="company-unique"
                    placeholder="Company *"
                    required
                  />
                </div>
                <div className="col form-group">
                  <input
                    type="text"
                    name="phone_number"
                    className="form-control"
                    id="phone-unique"
                    placeholder="Phone Number *"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject-unique"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  id="message-unique"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form> */}
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <h3>Contact Info</h3>
                  <div id="container" style={{ whiteSpace: "nowrap" }}>
                    {/* <div id="image">
                      <img src={GPSIcon} alt="location" />
                    </div> */}

                    {/* <div id="texts" className="contact-texts">
                      Accra-Ghana
                    </div> */}
                  </div>
                  <div id="container" style={{ whiteSpace: "nowrap" }}>
                    <div id="image">
                      <FaTelegramPlane size={35} style={{ color:"#000" }} />
                    </div>

                    <div id="texts" className="contact-texts">
                      <a
                        href="https://telegram.org/@a1kball"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color:"#fff" }}
                        >@a1kball</a>
                    </div>
                  </div>
                  <div id="container" style={{ whiteSpace: "nowrap" }}>
                    <div id="image">
                      <img src={MailIcon} alt="mail" />
                    </div>

                    <div id="texts" className="contact-texts">
                      1Kball@gmail.com
                    </div>
                  </div>
                  {/* <h6>
                    <img src={GPSIcon} alt="location" /> Accra-Ghana
                  </h6>
                  <h6>
                    <img src={PhoneIcon} alt="call" /> +233 (0) 12345678
                  </h6>
                  <h6>
                    <img src={MailIcon} alt="mail" /> 1Kball@gmail.com
                  </h6> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
