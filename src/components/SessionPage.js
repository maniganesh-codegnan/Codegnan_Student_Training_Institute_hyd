import React from "react";
import "./SessionPage.css";
import backgroundRight from "../photos/bg_blue_Right.png";
import studentLogo from "../photos/person.png";
import cicleIsolation from "../photos/CircleIsolation.png";
import dotSquare from "../photos/dotSquare.png";
import tick from "../photos/tickmark.png";
import institute from "../photos/India_Training_Institute.png";
import startCodeGetJob from "../photos/Start_Code_Get_Job.png";
import StudentData from "./StudentData";
import ratingStar from "../photos/ratingStar.png";


const SessionPage = () => {
  return (
    <div className="container-fluid sessionCls mainDiv">
      <div className="row">
        <div className="col-lg-5 col-md-12 session-page">
          <header className="header">
            <h1 className="firstHead"><img src={institute} alt="" /></h1>            
            <h2 className="startText">
            <img src={startCodeGetJob} alt="" />             
            </h2>
          </header>

          <section className="features-section">
          <ul className="features-list">
            <li className="d-flex align-items-center">
              <img src={tick} alt="tick" />
              &nbsp;&nbsp;
              <span className="info">Online and classroom IT certification courses</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={tick} alt="tick" />
              &nbsp;&nbsp;
              <span className="info">Expert trainers from top universities and companies</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={tick} alt="tick" />
              &nbsp;&nbsp;
              <span className="info">Advanced course curriculum</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={tick} alt="tick" />
              &nbsp;&nbsp;
              <span className="info">Real-time projects, Interviews</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={tick} alt="tick" />
              &nbsp;&nbsp;
              <span className="info">Career support with our job acceleration program</span>
            </li>
          </ul>
        </section>
        

          <section className="statistics">
             <span>
              <img className="studentImg stu_Img" src={studentLogo} alt="Student Logo" />
            </span>
            <div className="studentResults">
              <div>
                <h3>30,000+</h3>
                <p>Students&nbsp;Trained</p>
              </div>
              <span className="dash">|</span>
              <div>
                <h3>4.8<span><img className="rating" src={ratingStar} alt="Rating Star"/></span></h3>
                <p>2,200Student&nbsp;Ratings</p>
              </div> &nbsp;&nbsp;&nbsp;
              <span className="dash">|</span>
              <div>
                <h3>1250+</h3>
                <p>Companies&nbsp;Hired</p>
              </div>
            </div>
          </section>
        </div>

        <div className="col-lg-7 col-md-12 backImg">
          <img className="bgImage bgBlueRight" src={backgroundRight} alt="Background" />
          <div>
          <StudentData/>
          </div>
          
          <p className="allPlaced">Placed&nbsp;Students&nbsp;&gt;&gt;
          <button className="moreStudents"><a href="" className="seeMore">See More...</a></button></p>
        </div>

         <span className="dotImg">
          <img src={dotSquare} alt="Dot Square" />
        </span>
        <span className="center-container">
          <img src={cicleIsolation} alt="Circle Isolation" />
        </span>
        <span className="bottom-container btm_circle">
          <img src={cicleIsolation} alt="Bottom Isolation" />
        </span>        
      </div>

<div className="row footerDiv">
  <div className="col-8">
    <footer className="footer">
      <div className="footer-background">
        <p className="footerPara para">
          Codegnan offers finishing schools for <br /> students who want to start and grow their tech career.
        </p>
      </div>
    </footer>
  </div>
</div>
</div>
  );
};

export default SessionPage;
