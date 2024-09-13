import React from "react";
import "./Analytics.css";

const Analytics = () => {
  return (
    <div style={{ marginLeft: "60px" }}>
      <div className="insights_chart">
        <div className="patient_insights">Patient Insights</div>
        <div className="stats">
          <div id="score-bar-container">
            <div id="score-bar"></div>
          </div>
          <div className="percent">
            <div>60% </div>
            <div>Male</div>
          </div>
        </div>
        <div className="stats">
          <div id="score-bar-container">
            <div id="score-bar-one"></div>
          </div>
          <div className="percent">
            <div>40% </div>
            <div>Female</div>
          </div>
        </div>
        <div className="view_time">Most common age group: 30-45 years</div>
        <div className="view_time">Top concern: Cardiovascular health</div>
      </div>
    </div>
  );
};

export default Analytics;
