import React from "react";
import "../assets/css/index.css";
class Interests extends React.Component {
  render() {
    return (

       <div>
        {" "}
        <hr className="m-0" />
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="interests"
        >
          <div className="w-100">
            <h2 className="mb-5">Interests</h2>
            <p>
              
                Apart from being a web developer, I enjoy most of my time in playing Pc game.
                I am fitness freak also. I enjoy mountain climbing.
                
            </p>
            <p className="mb-0">
              I like to spend large amount of my free time exploring the latest technology.
              I like animation work in fornt-end web development world. Apart from  this i am good chef.

             
            </p>
          </div>
        </section>
      </div>
    );
  }
}
export default Interests;
