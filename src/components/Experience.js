import React from "react";
import "../assets/css/index.css";

class Experience extends React.Component {
  render() {
    return (
      <div>
        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experience"
        >
          <div className="w-100">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Full Stack Developer</h3>
                <div className="subheading mb-3">GUVi</div>
                <p>
                  I join guvi zen class program to become Full-Stack developer .
                  I did lot of mini projects while the zen program. My
                  experience was good in guvi and the environment was so
                  competative .
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">June 2019 - Present</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">WordPress Developer</h3>
                <div className="subheading mb-3">iniyas Private Limited</div>
                <p>
                  I got internship offer from iniyas Private Limited for the
                  role of WordPress developer. Mainly the company work is to
                  make website for the small scale based business in chennai. My
                  role was to make the UI for the client and after approvable of
                  UI from th client start implementing that in the WordPress.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">April 2019 - May 2019</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Experience;
