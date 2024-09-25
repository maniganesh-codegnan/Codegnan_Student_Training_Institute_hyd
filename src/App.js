import "./styles.css";
import React from "react";
import Navbar from "./components/Navbar";
import SessionPage from "./components/SessionPage";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <SessionPage />
      </div>
    </div>
  );
}
