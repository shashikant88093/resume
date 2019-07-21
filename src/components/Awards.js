import React from "react";
import "../assets/css/index.css";
class Awards extends React.Component {
  render() {
    return (
      <div>
      {" "}
      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech
              Competition 2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech
              Competition 2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>
    </div>
      // <div>
      //   {" "}
      //   <hr className="m-0" />
      //   <section
      //     className="resume-section p-3 p-lg-5 d-flex align-items-center"
      //     id="interests"
      //   >
      //     <div className="w-100">
      //       <h2 className="mb-5">Interests</h2>
      //       <p>
      //         Apart from being a web developer, I enjoy most of my time being
      //         outdoors. In the winter, I am an avid skier and novice ice
      //         climber. During the warmer months here in Colorado, I enjoy
      //         mountain biking, free climbing, and kayaking.
      //       </p>
      //       <p className="mb-0">
      //         When forced indoors, I follow a number of sci-fi and fantasy genre
      //         movies and television shows, I am an aspiring chef, and I spend a
      //         large amount of my free time exploring the latest technology
      //         advancements in the front-end web development world.
      //       </p>
      //     </div>
      //   </section>
      // </div>
    );
  }
}
export default Awards;
