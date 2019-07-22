import React from "react";
import "../assets/css/Awards.css";
class Awards extends React.Component {
  render() {
    return (
      <div>



        <div className="container">
          <h4>Project  List</h4>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline4">
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <span className="year">ONE</span>
                    <div className="inner-content">
                      <h3 className="title">CLone Like NetFlix</h3>
                      <p className="description">
                        Normally. I created the template By using BootStrap
                                    </p>
                                    <a href="https://shashikant88093.github.io/movies/">View Here</a>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <span className="year">TWO</span>
                    <div className="inner-content">
                      <h3 className="title">JS GAME</h3>
                      <p className="description">
                        I normally created the memory-card game by using vanilla js.                                    </p>
                        <a href="https://shashikant88093.github.io/js-game/">View Here</a>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <span className="year">THREE</span>
                    <div className="inner-content">
                      <h3 className="title">Library-one</h3>
                      <p className="description">
                        created library using reactJS
                                    </p>
                                    <a href="https://shashikant88093.github.io/library-one/">View Here</a>
                    </div>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <span className="year">FOUR</span>
                    <div className="inner-content">
                      <h3 className="title">CLONE TRELLO</h3>
                      <p className="description">
                        working on it By using reactJS,mongoDB,NodeJS
                                    </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Awards;
