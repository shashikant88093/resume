import React, { Component } from "react";
import "../assets/css/Certification.css";

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
              
                <img src="/image/python.jpeg" className="card-img-top " alt="" />
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
                <img src="/image/js.jpeg" className="card-img-top " alt="" />
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
              
                <img src="/image/ds.jpeg" className="card-img-top width " alt="" />
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
                <img src="/image/aws.jpeg" className="card-img-top " alt="" />
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
                <img src="/image/udemy.jpg" className="card-img-top " alt="" />
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
