import React from "react";
import "../assets/css/Project.css";
class Project extends React.Component {
  render() {
    return (
      <div >
      <div className="how-section1">
        <div className="row">
          <div className="col-md-6 how-img">
            <img
              src="/image/movies.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h4>Movies website</h4>
            <h4 className="subheading">
            I normally created movies website template
            </h4>
            <p className="text-muted">
              I  have use HTML, CSS and Bootstrap for doing this project
              <br/>
            <a href="https://shashikant88093.github.io/movies/">View Here</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>Game</h4>
            <h4 className="subheading">
            I have created memory-card game
            </h4>
            <p className="text-muted">
              I have used HTMl, CSS, Bootstrap and Js  for creating this game.
              <br/>

             <a href="https://shashikant88093.github.io/js-game/">View Here</a>
            </p>
          </div>
          <div className="col-md-6 how-img">
            <img
              src="/image/game.png"
              className=" img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 how-img">
            <img
              src="/image/form.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h4>Form</h4>
            <h4 className="subheading">
              Formlist used Bootstrap and js.

            </h4>
            <p className="text-muted">
           The form can add, delete and edit. 
           <br/>

             <a href="https://shashikant88093.github.io/formlist/">View Here</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>Angular Project</h4>
            <h4 className="subheading">
             It is available on github
            </h4>
            <p className="text-muted">
             i created some project like blog and template by using angular
            </p>
          </div>
          <div className="col-md-6 how-img">
            <img
              src="/image/angular.png"
              className=" img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2>This Resume is created by ReactJs</h2>
      </div>
      </div>
    );
  }
}
export default Project;
