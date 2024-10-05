import "./styles.css";
import React from "react";
import Navbar from "./components/Navbar";
import SessionPage from "./components/SessionPage";
import Certification from "./components/Certification";
export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <SessionPage />
        <Certification/>
      </div>
    </div>
  );
}
