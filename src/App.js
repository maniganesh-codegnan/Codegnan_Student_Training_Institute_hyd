import "./styles.css";
import React from "react";
import Navbar from "./components/Navbar";
import SessionPage from "./components/SessionPage";
import Certification from "./components/Certification";
import CourseCard from "./components/CourseCard";
import Companies from "./components/CompaniesHire";
import CodegnanPrograms from "./components/CodegnanPrograms";
import TrainingInstitution from "./components/TrainingInstitution";
export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <SessionPage />
        <Certification/>
        <CourseCard/>
        <Companies/>
        <CodegnanPrograms/>
        <TrainingInstitution/>
      </div>
    </div>
  );
}
