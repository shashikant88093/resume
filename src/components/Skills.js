import React from "react";
import "../assets/css/Skills.css";
import dev from "../image/dev.gif"

class Skills extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center">Skills</h1>
          <br />
          <div className="col-md-11">
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "80%" }}
                className="progress-bar progress-bar-success"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                HTML
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "80%" }}
                className="progress-bar progress-bar-info"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                CSS
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "80%" }}
                className="progress-bar progress-bar-warning"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Bootstrap
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "60%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                JavaScript
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "60%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                ReactJS
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "50%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Angular 8
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "50%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                NodeJS
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "50%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                MongoDB
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "50%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                AWS
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "60%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                GIT
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "40%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Basic Data-Structure
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "40%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                C++
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "50%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Python
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "60%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Wordpress
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "70%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                NPM
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "70%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                Photoshop
              </div>
            </div>
            <div className="progress">
              <div
                data-percentage="0%"
                style={{ width: "70%" }}
                className="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                UX/UI
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <img alt="" src={dev} />
        </div>
        <div />
      </div>
    );
  }
}
export default Skills;
