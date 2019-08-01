import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter
} from "@fortawesome/fontawesome-free-brands";
import "../assets/css/about.css";
import photo from "../image/photo.jpg";
import am from "../image/am.gif";
import "../assets/css/AppRouter.css";
class About extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-center mt-5 mar">
              <img alt="myImage" className="image" src={photo} />
            </div>
          </div>
          <div className="col-md-6">
            {" "}
            <section
              className="resume-section p-3 p-lg-5 d-flex align-items-center"
              id="about"
            >
              <div className="w-100">
                <h1 className="mb-0 ">
                  SHashikant
                  <span className="text-primary ml-1"> Kumar</span>
                </h1>
                <div className="subheading mb-5">
                  <br />
                  DOB:30-07-1996
                  <br />
                  Contact No : 8789750652
                  <br />
                  <a href="mailto:name@email.com">shashi94goswami@gmail.com</a>
                </div>
                <p className="lead mb-5" />
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/shashikant-kumar-655433155/">
                    <FontAwesomeIcon icon={faLinkedin} />{" "}
                  </a>
                  <a href="https://github.com/shashikant88093">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://twitter.com/Shashik88093">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.facebook.com/shashikant.goswami.756">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-right">
                <img alt="myImage" src={am} />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default About;