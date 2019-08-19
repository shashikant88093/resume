import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter
} from "@fortawesome/fontawesome-free-brands";
import "../assets/css/about.css";
import am from "../image/am.gif";
class About extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            {" "}
            <br />
            <br />
            <section className="resume-section p-3 p-lg-5 " id="about">
              <div className="image">
                <h1 className="mb-0 ">
                  SHashikant
                  <span className="text-primary ml-1"> Kumar</span>
                </h1>
                <div className="subheading mb-5">
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
            </section>
          </div>

          <div className="col-md-6">
            <br />
            <img className="image" src={am} alt="" />
          </div>
        </div>
      </>
    );
  }
}
export default About;
