import React from "react";
import "./TrainingInstitution.css"; // Import the CSS file
import cg1_logo from "../photos/trainings/cg1_logo.png";
import cg2_logo from "../photos/trainings/cg2_logo.png";
import cg3_logo from "../photos/trainings/cg3_logo.png";
import cg4_logo from "../photos/trainings/cg4_logo.png";
import cg5_logo from "../photos/trainings/cg5_logo.png";
import cg6_logo from "../photos/trainings/cg6_logo.png";
import cg7_logo from "../photos/trainings/cg7_logo.png";
import cg8_logo from "../photos/trainings/cg8_logo.png";
import blackDaimond from "../photos/trainings/Black_diamond.png";
import redDaimond from "../photos/trainings/Red_diamond.png";
import circle_isolate from "../photos/trainings/Isolation_Mode.png";

const TrainingInstitution = () => {
  return (
    <div className="trainingsSession">
      {/* Other Training Institutions Section */}
      <div className="container-fluid trainingBlack">
        <center><h2 className="section-title">
        Other Training Institutions</h2></center>
        <div className="row text-center one">
          <div className="col-md-3"> 
           <p> <button className="btn-red">Training</button></p>
            <img src={cg1_logo} alt="Training" className="img-fluid image-style" />
          </div>
          <div className="col-md-3">
           <p> <button className="btn-red">No Guidelines</button></p>
            <img src={cg2_logo} alt="No Guidelines" className="img-fluid image-style" />
          </div>
          <div className="col-md-3">
            <p><button className="btn-red">No Interviews</button></p>
            <img src={cg3_logo} alt="No Interviews" className="img-fluid image-style" />
          </div>
          <div className="col-md-3">
           <p> <button className="btn-red">No Job</button></p>
            <img src={cg4_logo} alt="No Job" className="img-fluid image-style" />
          </div>
        </div>
      </div>
      <div className="diamond-images">
      <img src={blackDaimond} alt="" className="blackDiamond" />
      <img src={circle_isolate} alt="" className="circleIsolation" />
      <img src={redDaimond} alt="" className="redDiamond" />
      </div>

      {/* Codegnan Training Institution Section */}
      <div className="container-fluid trainingRed">
        <center><h3 className="section-title codegnan-training">
          Codegnan <span>Training Institution</span>
        </h3></center>
        <div className="row text-center one">
          <div className="col-md-3">
            <p><button className="btn-red">Training</button></p>
            <img src={cg5_logo} alt="Training" className="img-fluid image-style" />
          </div>
          <div className="col-md-3">
            <p><button className="btn-red">Guiding</button></p>
            <img src={cg6_logo} alt="Guiding" className="img-fluid image-style" />
          </div>
          <div className="col-md-3">
           <p> <button className="btn-red">Conducting Interviews</button></p>
            <img src={cg7_logo} alt="Conducting Interviews" className="img-fluid image-style" />
          </div>
          <div className="col-md-3">
            <p><button className="btn-red">Get the Job</button></p>
            <img src={cg8_logo} alt="Get the Job" className="img-fluid image-style" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingInstitution;
