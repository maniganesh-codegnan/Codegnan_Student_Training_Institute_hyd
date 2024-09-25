import React from "react";
import "./SessionPage.css";
import backgroundRight from "../photos/backgroundRight.jpeg";
import studentogo from "../photos/student.png";

const sessionHeader = (
  <div className="container">
    <div className="row">
      <div className="col-md-7 session-page">
        <header className="header">
          <h1>
            <b>India's #1 Training Institute</b>
          </h1>
          <h2>
            <b>
              <span className="code-text">Start.Code.</span>
              <span className="red-text">Get Job.</span>
            </b>
          </h2>
        </header>

        <section className="features-section">
          <ul className="features-list">
            <li>✔️ Online and classroom IT certification courses</li>
            <li>✔️ Expert trainers from top universities and companies</li>
            <li>✔️ Advanced course curriculum</li>
            <li>✔️ Real-time projects, Interviews</li>
            <li>✔️ Career support with our job acceleration program</li>
          </ul>
        </section>

        <section className="statistics">
          <span>
            <img className="studentImg" src={studentogo} alt="" />
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "red" }}>30,000+</h2>
              <p>Students Trained</p>
            </div>
            <span className="dash">|</span>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "red" }}>4.8★★★★★</h2>
              <p>2,200 Student Ratings</p>
            </div>
            <span className="dash">|</span>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "red" }}>1250+</h2>
              <p>Companies Hired</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>
            Codegnan offers finishing schools for students who want to start and
            grow their tech career.
          </p>
        </footer>
      </div>
      <div className="col-md-5">
        <img className="bgImage" src={backgroundRight} alt="" />
        <button className="btnPlacement">
          <b> Placed Students...</b>
        </button>
      </div>
    </div>
  </div>
);

const SessionPage = () => {
  return <>{sessionHeader}</>;
};

export default SessionPage;
