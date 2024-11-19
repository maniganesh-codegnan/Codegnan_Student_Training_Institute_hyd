import React, { useState, useEffect } from "react";
import "./StudentData.css";
// import studentOne from "../photos/1.png";
// import studentTwo from "../photos/2.png";
// import studentThree from "../photos/3.png";
// import studentFour from "../photos/4.png";
// import studentFive from "../photos/5.png";
// import studentSix from "../photos/6.png";
// import studentSeven from "../photos/7.png";
// import studentEight from "../photos/8.png";         
import studentOne from "../photos/students/2.jpg";
import studentTwo from "../photos/students/3.jpg";
import studentThree from "../photos/students/4.jpg";
import studentFour from "../photos/students/5.jpg";
import studentFive from "../photos/students/6.jpg";
import studentSix from "../photos/students/7.jpg";
import studentSeven from "../photos/students/8.jpg";
import studentEight from "../photos/students/9.jpg";

const companies = [
  { id: 1, 
    name: "A", 
    companyName: "TCS", 
    salary: "10 LPA", 
    image: studentOne },
  {
    id: 2,
    name: "B",
    companyName: "Infosys",
    salary: "11 LPA",
    image: studentTwo,
  },
  {
    id: 3,
    name: "C",
    companyName: "L&T",
    salary: "13 LPA",
    image: studentThree,
  },
  {
    id: 4,
    name: "D",
    companyName: "HCL",
    salary: "14 LPA",
    image: studentFour,
  },
  {
    id: 5,
    name: "E",
    companyName: "Amazon",
    salary: "20 LPA",
    image: studentFive,
  },
  {
    id: 6,
    name: "F",
    companyName: "Wipro",
    salary: "12 LPA",
    image: studentSix,
  },
  {
    id: 7,
    name: "G",
    companyName: "ADP",
    salary: "15 LPA",
    image: studentSeven,
  },
  {
    id: 8,
    name: "H",
    companyName: "Swiggy",
    salary: "16 LPA",
    image: studentEight,
  },
  { id: 9, name: "A", companyName: "TCS", salary: "10 LPA", image: studentOne },
  {
    id: 10,
    name: "B",
    companyName: "Infosys",
    salary: "11 LPA",
    image: studentTwo,
  },
  {
    id: 11,
    name: "C",
    companyName: "L&T",
    salary: "13 LPA",
    image: studentThree,
  },
  {
    id: 12,
    name: "D",
    companyName: "HCL",
    salary: "14 LPA",
    image: studentFour,
  },
  {
    id: 13,
    name: "E",
    companyName: "Amazon",
    salary: "20 LPA",
    image: studentFive,
  },
  {
    id: 14,
    name: "F",
    companyName: "Wipro",
    salary: "12 LPA",
    image: studentSix,
  },
  {
    id: 15,
    name: "G",
    companyName: "ADP",
    salary: "15 LPA",
    image: studentSeven,
  },
  {
    id: 16,
    name: "H",
    companyName: "Swiggy",
    salary: "16 LPA",
    image: studentEight,
  }
];

function StudentData() {
  const [selectedCompany, setSelectedCompany] = useState(companies[1]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setCurrentIndex(companies.indexOf(company));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedCompany(companies[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="studentContainer blueRight">
      <div className="circle-container">
        {companies.map((company) => (
          <div key={company.id} className="company-wrapper">
            <span className="salary">{company.salary}</span>
            <span className="company-name">{company.companyName}</span>
            <img
              key={company.id}
              src={company.image}
              alt={company.name}
              className="company-image"
              onClick={() => handleCompanyClick(company)}
            />
          </div>
        ))}
      </div>

      <div className="company-info">
        {/* <h3>{selectedCompany.name}</h3>*/}
        <img
          src={selectedCompany.image}
          alt={selectedCompany.name}
          className="center-image"
        />
        <div>
          <h1>
            {selectedCompany.salary}&nbsp;
            <span>{selectedCompany.companyName}</span>
          </h1>
        </div>
        {/* <h1>{selectedCompany.salary} </h1>
        <h2>{selectedCompany.companyName}</h2>
        <h3>{selectedCompany.name}</h3> */}
      </div>
    </div>
  );
}

export default StudentData;
