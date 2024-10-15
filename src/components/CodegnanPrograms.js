import React from "react";
import "./CodegnanPrograms.css";
import whyImage from "../photos/all_Programs/why.png";
import studyStudent from "../photos/all_Programs/studyStudent.png";

function CodegnanPrograms() {
  const studentArray=[
    "Job Assistance Program",
    "Affordable Training Fees",
    "Expert Trainers and Mentors",
    "Trusted by 30,000+ Students",
    "Practical Learning with Projects",
    "Industry recognized certification",
    "Updated and Comprehensive Course Curriculum"
  ]
  return (
    <div className="container-fluid  enroll-container">    
      <div className="row m-5 justify-content-left ">
        <div className="col-md-6">
        <div className="programs-certification">
        <img src={whyImage} alt=""  className="whyCertificate"/> 
          <h1 className="font-weight-bold">Why</h1>
          <h3>enroll in Codegnan's <br /> Certification programs</h3>
        </div>        
          <ul className="list-group">
            {studentArray.map((item, index) => (
              <li key={index} className="list-group-item d-flex align-items-center m-4">
                <span className="text-danger mr-2">▶</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
        <img src={studyStudent} alt="" className="studentImg" />
        </div>
      </div>
    </div>
  );
}

export default CodegnanPrograms;
