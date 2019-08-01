import React, { Component } from "react";
import "../assets/css/Certification.css";
import js from "../image/js.jpeg";
import ds from "../image/ds.jpeg";
import python from "../image/python.jpeg";
import aws from "../image/aws.jpeg";
import udemy from "../image/udemy.jpg";
import "../assets/css/AppRouter.css";

class Certification extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
            <div className="col-md-2"></div>
          <div className="col-md-5">
              <br/>
              <br/>
              
            <div className="card text-center">
              <div className="overflow">
              
                <img src={python} className="card-img-top " alt="" />
              </div>
              <div className="card-body text-dark">
              
                <h4 className="card-title">Python</h4>
              </div>
            </div>
          </div>
          <div className="col-md-5">
          <br/>
          <br/>
            <div className="card text-center">
              <div className="overflow">
                <img src={js} className="card-img-top " alt="" />
              </div>
              <div className="card-body text-dark">
              
                <h4 className="card-title">JavaScript</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-md-2"></div>
          <div className="col-md-5">
              <br/>
              <br/>
              
            <div className="card text-center">
              <div className="overflow">
              
                <img src={ds} className="card-img-top width " alt="" />
              </div>
              <div className="card-body text-dark">
              
                <h4 className="card-title">Data-Structure</h4>
              </div>
            </div>
          </div>
          <div className="col-md-5">
          <br/>
          <br/>
            <div className="card text-center">
              <div className="overflow">
                <img src={aws} className="card-img-top " alt="" />
              </div>
              <div className="card-body text-dark">
              
                <h4 className="card-title">AWS</h4>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="d-flex  justify-content-center">
        <br/>
            <div className="card text-center">
              <div className="overflow">
                <img src={udemy} className="card-img-top " alt="" />
              </div>
              <div className="card-body text-dark">
              
                <h4 className="card-title">Udemy Course</h4>
              </div>
            </div>
        </div>
      </>
    );
  }
}

export default Certification;
