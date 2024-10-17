// TrainingInstitution.js
import React from "react";
import "./TrainingInstitution.css"; // Import the CSS file
import bg from "../photos/trainings/bg.png";
import cg1_logo from "../photos/trainings/cg1_logo.png";
import cg2_logo from "../photos/trainings/cg2_logo.png";
import cg02_logo from "../photos/trainings/cg02_logo.png";
import cg3_logo from "../photos/trainings/cg3_logo.png";
import cg4_logo from "../photos/trainings/cg4_logo.png";
import cg5_logo from "../photos/trainings/cg5_logo.png";
import cg6_logo from "../photos/trainings/cg6_logo.png";
import cg7_logo from "../photos/trainings/cg7_logo.png";
import cg8_logo from "../photos/trainings/cg8_logo.png";
import black_Rectangle1 from "../photos/trainings/black_Rectangle1.png";
import black_Rectangle2 from "../photos/trainings/black_Rectangle2.png";
import red_Rectangle1 from "../photos/trainings/Red_Rectangle1.png";
import red_Rectangle3 from "../photos/trainings/Red_Rectangle3.png";

const TrainingInstitution = () => {
  return (
    <div className="container-fluid trainingsSession">
      <div className="trainingBlack">
        <span className="other_training">Other Training Institutions</span>
        <div className="flex-container">
          <div className="flex-item">
            <p>
              <button> Training</button>
            </p>
            <img src={cg1_logo} alt="Training" className="image-style" />
          </div>
          <div className="flex-item">
            <p>
              <button>No Guidelines</button>
            </p>
            <img src={cg2_logo} alt="No Guidelines" className="image-style" />
          </div>
          <div className="flex-item">
            <p>
              <button>No Interviews</button>
            </p>
            <img src={cg3_logo} alt="No Interviews" className="image-style" />
          </div>
          <div className="flex-item">
            <p>
              <button>No Job</button>
            </p>
            <img src={cg4_logo} alt="No Job" className="image-style" />
          </div>
        </div>
      </div>

      <div className="trainingRed">
        <p className="codegnan_training">
          Codegnan <span>Training Institution</span>
        </p>
        <div className="flex-container">
          <div className="flex-item">
            <p>
              <button>Training</button>
            </p>
            <img src={cg5_logo} alt="Training" className="image-style" />
          </div>
          <div className="flex-item">
            <p>
              <button>Guiding</button>
            </p>
            <img src={cg6_logo} alt="Guiding" className="image-style" />
          </div>
          <div className="flex-item">
            <p>
              <button>Conducting Interviews</button>
            </p>
            <img
              src={cg7_logo}
              alt="Conducting Interviews"
              className="image-style"
            />
          </div>
          <div className="flex-item">
            <p>
              <button>Get the Job</button>
            </p>
            <img src={cg8_logo} alt="Get the Job" className="image-style" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingInstitution;
