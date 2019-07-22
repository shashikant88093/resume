import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Awards from "../components/Awards";
import "../assets/css/AppRouter.css";
import Image from "../image/photo.jpg"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AppRouters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-light bg-info fixed-top"
            id="sideNav"
          >
            <Link className="navbar-brand js-scroll-trigger" to="#page-top">
              <span>
                <img
                  className="img-fluid img-profile rounded-circle mx-auto mb-2 rotate"
                  src={Image}
                  alt=""
                />
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Experience">
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Education">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Skills">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/Awards">
                    Certification
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Interests" className="nav-link js-scroll-trigger">
                    Interests
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={About} />
          <Route path="/Experience" component={Experience} />
          <Route path="/Education" component={Education} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Awards" component={Awards} />
          <Route path="/Interests" component={Interests} />
        </div>
      </Router>
    );
  }
}

export default AppRouters;
