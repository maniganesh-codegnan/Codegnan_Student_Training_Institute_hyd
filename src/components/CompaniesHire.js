import React from 'react';
import './CompaniesHire.css'; 
import tcs from "../photos/companies/tcs-logo.png";
import google from "../photos/companies/Google-logo.png";
import amazon from "../photos/companies/Amazon-logo.png";
import microsoft from "../photos/companies/microsoft-logo.png";
import techMahindra from "../photos/companies/Tech-Mahindra-logo.png";
import mPhasis from "../photos/companies/mphasis-logo.png";
import capgemini from "../photos/companies/capgemini-logo.png";
import stanford from "../photos/companies/stanford-university-logo.png";
import iitBombay from "../photos/companies/iit-bombay-logo.png";
import nielsenIQ from "../photos/companies/Nielseni-iq-logo.png";
import pwc from "../photos/companies/pwc-logo.png";
import gensuite from "../photos/companies/gensuite-logo.png";

const CompaniesHire = () => {
  const companies = [
    { name: 'TCS', logo: tcs, alt: 'TCS Logo' },
    { name: 'Google', logo: google, alt: 'Google Logo' },
    { name: 'Amazon', logo: amazon, alt: 'Amazon Logo' },
    { name: 'Microsoft', logo: microsoft, alt: 'Microsoft Logo' },
    { name: 'Tech Mahindra', logo: techMahindra, alt: 'Tech Mahindra Logo' },
    { name: 'Mphasis', logo: mPhasis, alt: 'Mphasis Logo' },
    { name: 'Capgemini', logo: capgemini, alt: 'Capgemini Logo' },
    { name: 'Stanford University', logo: stanford, alt: 'Stanford Logo' },
    { name: 'IIT Bombay', logo: iitBombay, alt: 'IIT Bombay Logo' },
    { name: 'NielsenIQ', logo: nielsenIQ, alt: 'NielsenIQ Logo' },
    { name: 'PwC', logo: pwc, alt: 'PwC Logo' },
    { name: 'Gensuite', logo: gensuite, alt: 'Gensuite Logo' },
  ];

  return (
    <div className="companies-container">
      <h2>1250+ Companies Have Hired Codegnan Learners</h2>
      <div className="companies-grid">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>
            <img src={company.logo} alt={company.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesHire;