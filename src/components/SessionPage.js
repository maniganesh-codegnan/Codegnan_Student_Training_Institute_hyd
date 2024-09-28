import React from "react";
import "./SessionPage.css";
import backgroundRight from "../photos/BlueScreenRight.png";
import studentLogo from "../photos/person.png";
import cicleIsolation from "../photos/CircleIsolation.png";
import dotSquare from "../photos/dotSquare.png";
import tick from "../photos/tickmark.png";
import blueBottom from "../photos/blueBottom.png";
import studentCenter from "../photos/studentCenter.png";
import studentOne from "../photos/studentOne.png";
import studentTwo from "../photos/studentTwo.png";
import studentThree from "../photos/studentThree.png";
import studentFour from "../photos/studentFour.png";
import studentFive from "../photos/studentFive.png";
import studentSix from "../photos/studentSix.png";
import studentSeven from "../photos/studentSeven.png";
import studentEight from "../photos/studentEight.png";
import institute from "../photos/trainingInstitute.png";
import startCodeGetJob from "../photos/startCodeGetJob.png";


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
              <span>Online and classroom IT certification courses</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={tick} alt="tick" />
              <span>Expert trainers from top universities and companies</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={tick} alt="tick" />
              <span>Advanced course curriculum</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={tick} alt="tick" />
              <span>Real-time projects, Interviews</span>
            </li>
            <li className="d-flex align-items-center">
              <img src={tick} alt="tick" />
              <span>Career support with our job acceleration program</span>
            </li>
          </ul>
        </section>
        

          <section className="statistics">
             <span>
              <img className="studentImg" src={studentLogo} alt="Student Logo" />
            </span>
            <div className="studentResults">
              <div>
                <h3>30,000+</h3>
                <p>Students&nbsp;Trained</p>
              </div>
              <span className="dash">|</span>
              <div>
                <h3>4.8★★★★★</h3>
                <p>2,200Student&nbsp;Ratings</p>
              </div>
              <span className="dash">|</span>
              <div>
                <h3>1250+</h3>
                <p>Companies&nbsp;Hired</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side Content */}
        <div className="col-lg-7 col-md-12 backImg">
          <img className="bgImage bgBlueRight" src={backgroundRight} alt="Background" />
          <span className="centerStudent">
            <img src={studentCenter} alt="Student Center" />
          </span>
          <span className="studentSalary">12LPA&nbsp;<span className="studentCompany">Infosys</span></span>
          
           <span className="student1">
            <img src={studentOne} alt="Student 1" />
          </span>
           <span className="student2">
            <img src={studentTwo} alt="Student 2" />
          </span>
          <span className="student3">
            <img src={studentThree} alt="Student 3" />
          </span>
          <span className="student4">
            <img src={studentFour} alt="Student 4" />
          </span>
          <span className="student5">
            <img src={studentFive} alt="Student 5" />
          </span>
          <span className="student6">
            <img src={studentSix} alt="Student 6" />
          </span>
          <span className="student7">
            <img src={studentSeven} alt="Student 7" />
          </span>
          <span className="student8">
            <img src={studentEight} alt="Student 8" />
          </span>
          <p className="allPlaced">Placed&nbsp;Students&nbsp;<button className="moreStudents"><a href="">See More...</a></button></p>



            
        </div>

        {/* Decorations and Footer */}
       
         <span className="dotImg">
          <img src={dotSquare} alt="Dot Square" />
        </span>
        <span className="center-container">
          <img src={cicleIsolation} alt="Circle Isolation" />
        </span>
        <span className="bottom-container">
          <img src={cicleIsolation} alt="Bottom Isolation" />
        </span>
        
      </div>

<div className="row footerDiv">
  <div className="col-8">
    <footer className="footer">
      <div className="footer-background">
        <p className="footerPara">
          Codegnan offers finishing schools for <br /> students who want to start and grow their tech career.
        </p>
      </div>
    </footer>
  </div>
</div>

      {/* Footer 
      <div className="row footerDiv">
        <div className="col-12">
          <footer className="footer">
            <img src={blueBottom} alt="Footer Background" />
            <p className="footerPara">
              Codegnan offers finishing schools for students who want to start and grow their tech career.
            </p>
          </footer>
        </div>
      </div>*/}
    </div>
  );
};

export default SessionPage;
