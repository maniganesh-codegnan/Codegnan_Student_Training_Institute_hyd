import React, { useState } from "react";
import "./StudentData.css"; 
import studentOne from "../photos/1.png";
import studentTwo from "../photos/2.png";
import studentThree from "../photos/3.png";
import studentFour from "../photos/4.png";
import studentFive from "../photos/5.png";
import studentSix from "../photos/6.png";
import studentSeven from "../photos/7.png";
import studentEight from "../photos/8.png";

// Updated data structure for company images, CTC, and company names
const companies = [
  { id: 1, name:"A",companyName: "TCS", salary: "10 LPA", image:studentOne },
  { id: 2, name:"B",companyName: "Infosys", salary: "11 LPA", image: studentTwo }, 
  { id: 3, name:"C",companyName: "L&T", salary: "13 LPA", image: studentThree },
  { id: 4, name:"D",companyName: "HCL", salary: "14 LPA", image: studentFour },
  { id: 5, name:"E",companyName: "Amazon", salary: "20 LPA", image: studentFive },
  { id: 6, name:"F",companyName: "wipro", salary: "12 LPA", image: studentSix },
  { id: 7, name:"G",companyName: "ADP", salary: "15 LPA", image: studentSeven },
  { id: 8, name:"H",companyName: "Swiggy", salary: "16 LPA", image: studentEight }
];

function StudentData() {
  const [selectedCompany, setSelectedCompany] = useState(companies[1]); // Set default to Infosys

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="studentContainer blueRight">
      <div className="circle-container">
        {companies.map((company) => (
          <img
            key={company.id}
            src={company.image}
            alt={company.name}
            className="company-image"
            onClick={() => handleCompanyClick(company)}
          />
        ))}
      </div>

      <div className="company-info">

        <img src={selectedCompany.image} alt={selectedCompany.name} className="center-image" />
        {/*<h1>{selectedCompany.salary}</h1>
        <h2>{selectedCompany.companyName}</h2>
         <h3>{selectedCompany.name}</h3> */}
      </div>
    </div>
  );
}

export default StudentData;