import React from 'react';
import './CourseCard.css'; 
import leftIsolation from "../photos/courseCards/left_Off_Isolation.png";
import pythonImage from "../photos/courseCards/python_Image.png";
import javaImage from "../photos/courseCards/java_image.png";
import dataScienceImage from "../photos/courseCards/dataScience_image.png";
import cImage from "../photos/courseCards/c_image.png";
import calendar from "../photos/courseCards/calendar.png";

const CertificationCard = ({ imgSrc, title, description, duration }) => {
  return (
    <div className="certification-card">
      <img src={imgSrc} alt={`${title} Certification`} className="certification-image" />
      <div className="certification-info">
      <span></span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="duration-cta">
          <img src={calendar} alt="calendar icon" />
          <p className="duration">Duration: {duration}</p>
          <button className="join-button">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

const CourseCard = () => {
  const programs = [
    {
      imgSrc: pythonImage,
      title: 'Python Training',
      description: 'Launch your data science or web development career with Python, the versatile programming language.',
      duration: '1 Month'
    },
    {
      imgSrc: dataScienceImage,
      title: 'Data Science',
      description: 'Advance your analytics career by gaining data science skills to extract strategic insights.',
      duration: '6 Months'
    },
    {
      imgSrc: javaImage,
      title: 'Full-stack Java',
      description: 'Launch your career as a full-stack developer by gaining in-demand Java skills spanning front and backend.',
      duration: '100 Days'
    },
    {
      imgSrc: cImage,
      title: 'C Programming',
      description: 'Launch your data science or web development career with C, the foundational programming language.',
      duration: '30 Days'
    }
  ];

  return (
    <div className="courseCard-wrapper">
      <div className="left-isolation-container">
        <img className='left-isolation' src={leftIsolation} alt="Side decoration" />
      </div>
      <h2>Our Certification Programs</h2>
      <div className="certification-grid">
        {programs.map((program, index) => (
          <CertificationCard
            key={index}
            imgSrc={program.imgSrc}
            title={program.title}
            description={program.description}
            duration={program.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
