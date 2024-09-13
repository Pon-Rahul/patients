import React from "react";
import "./Patients.css";

const Patients = () => {
  const patients = [
    {
      name: "John Doe",
      age: 45,
      sex: "Male",
      problem: "Diabetes",
      doctor: "Dr. Smith",
      priority: "High",
      issue: "Unsolved"
    },
    {
      name: "Priya Patel",
      age: 30,
      sex: "Female",
      problem: "Fever",
      doctor: "Dr. Gupta",
      priority: "Medium",
      issue: "Solved"
    },
    {
      name: "Amit Singh",
      age: 50,
      sex: "Male",
      problem: "Arthritis",
      doctor: "Dr. Kumar",
      priority: "High",
      issue: "Unsolved"
    },
    {
      name: "Emily Watson",
      age: 25,
      sex: "Female",
      problem: "Migraine",
      doctor: "Dr. Johnson",
      priority: "Low",
      issue: "Solved"
    },
    {
      name: "Robert Brown",
      age: 60,
      sex: "Male",
      problem: "Heart Disease",
      doctor: "Dr. Lee",
      priority: "High",
      issue: "Unsolved"
    }
  ];
  
  return (
    <div className="whole">
    <div className="appo">
        <div className="upcoming_title">Patients Details</div>
        <div className="up_title">
          <div>PATIENTS</div>
          <div>PROBLEM</div>
          <div>DOCTOR</div>
          <div>PRIORITY</div>
          <div>ACTION</div>
        </div>
        {patients.map((appointment, index) => (
          <div className="details" key={index}>
            <div>
              <div className="view_name">{appointment.name}</div>
              <div className="view_age">
                {appointment.age} years, {appointment.sex}
              </div>
            </div>
            <div className="view_time">{appointment.problem}</div>
            <div className="view_video_call">{appointment.doctor}</div>
            <div className="view_upcomming">
              {appointment.priority}
            </div>
            <div className="view_details">{appointment.issue}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
