import React from "react";
import "./Certification.css";
import trustpilot from "../photos/certification_pics/Trustpilot_logo.png";
import googleBusiness from "../photos/certification_pics/google-my-business.png";
import justdial from "../photos/certification_pics/jd-logo.png";
import greenStars from "../photos/certification_pics/greenStars.png";
import blueStars from "../photos/certification_pics/blueStars.png";
import orangeStars from "../photos/certification_pics/orangeStars.png";
import certificate from "../photos/certification_pics/certificate.png";
import studentStudy from "../photos/certification_pics/studentStudy.png";

function Certification(){
  return (
     <div className="card">
    <div className="ratings-container">
      <div className="rating-block">
        <p className="rating-value">
          4.8
          <span>
            <img src={greenStars} alt="half star" className="half-star" />
          </span>
        </p>
        <img src={trustpilot} alt="Trustpilot" className="logo trustpilot" />
      </div>

      <div className="rating-block">
        <p className="rating-value">
          4.8
          <span>
            <img src={blueStars} alt="half star" className="half-star bl" />
          </span>
        </p>

        <img
          src={googleBusiness}
          alt="Google Business"
          className="google logo"
        />
      </div>

      <div className="rating-block">
        <p className="rating-value">
          4.7
          <span>
            <img src={orangeStars} alt="half star" className="half-star or" />
          </span>
        </p>
        <img src={justdial} alt="Justdial" className="justdial logo" />
      </div>
    </div>
    <div className="certificate-container">
    <h1>Skills Certificate from the Codegnan</h1>
    <div className="image-flex">
      <img 
        src={require('../photos/certification_pics/certificate.png')} 
        alt="Certificate"
        className="certificate-image"
      />
      <img 
        src={studentStudy} 
        alt="Student Study"
        className="student-image"
      />
    </div>
  </div>
    </div>
  );
};

export default Certification;
