import React from "react";
import "../assets/css/index.css";
class Education extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div className="w-100">
            <h2 className="mb-5">Education</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">S.R.M Institution Of Science And Technology</h3>
                <div className="subheading mb-3">Bachelor of Technology</div>
                <div>I.T - Web Development Track</div>
                <p>% : 67.23</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">August 2015 - May 2019</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div className="resume-content">
                <h3 className="mb-0">Shiv Jyoti SR SE School</h3>
                <div className="subheading mb-3"></div>
                <p>%:60.8</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">May 2013 - March 2015</span>
              </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div className="resume-content">
                <h3 className="mb-0">M.S.Memorial School</h3>
                <div className="subheading mb-3"></div>
                <p>%:66</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">March 2010 - March 2011</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Education;
