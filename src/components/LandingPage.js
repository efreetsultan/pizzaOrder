import React from "react";
import "./LandingPage.css";
import "./Mobile.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Rick and Morty fanpage</h1>
      <h3 className="landing-page-text">
        Click either on "Characters" or "Locations" button to see relevant
        content!
      </h3>
    </div>
  );
}
