import React from "react";
import "../assets/css/index.css";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div className="w-100">
            <h1 className="mb-0">
              SHashikant
              <span className="text-primary">Kumar</span>
            </h1>
            <div className="subheading mb-5">
              House Number = 1,Nehru Street ,Kanagam Road ,Tharamani Road
              ,Chennai 600113, Tamil Nadu
              <br />
              <Link href="mailto:name@email.com">
                shashi94goswami@gmail.com
              </Link>
            </div>
            <p className="lead mb-5" />
            <div className="social-icons">
              <Link href="#">
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link href="#">
                <i className="fab fa-github" />
              </Link>
              <Link href="#">
                <i className="fab fa-twitter" />
              </Link>
              <Link href="#">
                <i className="fab fa-facebook-f" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
