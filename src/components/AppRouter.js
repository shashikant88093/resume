import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Certification from "../components/Certification";
import Project from "./project";
import "../assets/css/AppRouter.css";
import photo from "../image/photo.jpg";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AppRouters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Toggle: false
    };
  }
  onclick = () => {
    this.setState({ Toggle: this.state.Toggle });
  };
  render() {
    return (
      <Router basename={"/subdirectory"}>
        <>
          <nav
            className="navbar navbar-expand-lg navbar-light bg-info fixed-top"
            id="sideNav"
          >
            <Link className="navbar-brand js-scroll-trigger" to="#page-top">
              <span>
                <img
                  className="img-fluid img-profile rounded-circle mx-auto mb-2 rotate"
                  src={photo}
                  alt=""
                />
              </span>
            </Link>
            <button
              Toggle={this.state.Toggle}
              onClick={this.onclick}
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
                  <Link
                    className="nav-link js-scroll-trigger"
                    to={`${process.env.PUBLIC_URL}/`}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link js-scroll-trigger"
                    to={`${process.env.PUBLIC_URL}/Experience`}
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link js-scroll-trigger"
                    to={`${process.env.PUBLIC_URL}/Education`}
                  >
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link js-scroll-trigger"
                    to={`${process.env.PUBLIC_URL}/Skills`}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link js-scroll-trigger"
                    to={`${process.env.PUBLIC_URL}/Project`}
                  >
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link js-scroll-trigger"
                    to={`${process.env.PUBLIC_URL}/Certification`}
                  >
                    Certification
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={`${process.env.PUBLIC_URL}/Interests`}
                    className="nav-link js-scroll-trigger"
                  >
                    Interests
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={About} />
          <Route
            path={`${process.env.PUBLIC_URL}/Experience`}
            component={Experience}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Education`}
            component={Education}
          />
          <Route path={`${process.env.PUBLIC_URL}/Skills`} component={Skills} />
          <Route
            path={`${process.env.PUBLIC_URL}/Project`}
            component={Project}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Certification`}
            component={Certification}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Interests`}
            component={Interests}
          />
        </>
      </Router>
    );
  }
}

export default AppRouters;
