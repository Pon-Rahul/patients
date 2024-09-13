import React from "react";
import "./DashBoard.css";
import { FaCalendar } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { text: "Review lab results for Priya Patel", completed: false },
    { text: "Prepare presentation for medical conference", completed: false },
    { text: "Follow up with Amit Singh about medication", completed: false },
    { text: "Schedule team meeting for next week", completed: false },
  ]);

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="dashboard">
      <div className="todos">
        <div className="view_box">
          <div className="view_box_content">
            <div className="view_topic">Today's Appointments</div>
            <div className="view_number" style={{ color: "#00B8A9" }}>
              12
            </div>
            <div className="view_count">4 video consultations</div>
          </div>
          <div style={{ color: "#00B8A9", marginTop: "20px" }}>
            <FaCalendar style={{ height: "36px", width: "24px" }} />
          </div>
        </div>
        <div className="view_box">
          <div className="view_box_content">
            <div className="view_topic">New Patients</div>
            <div className="view_number" style={{ color: "#FF8C69" }}>
              5
            </div>
            <div className="view_count">This week</div>
          </div>
          <div style={{ color: "#FF8C69", marginTop: "20px" }}>
            <IoPersonAdd style={{ height: "36px", width: "24px" }} />
          </div>
        </div>
        <div className="view_box">
          <div className="view_box_content">
            <div className="view_topic">Pending Reports</div>
            <div className="view_number" style={{ color: "#ff6a00" }}>
              7
            </div>
            <div className="view_count">Require review</div>
          </div>
          <div style={{ color: "#ff6a00", marginTop: "20px" }}>
            <GrDocumentPerformance style={{ height: "36px", width: "24px" }} />
          </div>
        </div>
        <div className="view_box">
          <div className="view_box_content">
            <div className="view_topic">Average Rating</div>
            <div className="view_number" style={{ color: "#ffe800" }}>
              4.8
            </div>
            <div className="view_count">From 150 reviews</div>
          </div>
          <div style={{ color: "#ffe800", marginTop: "20px" }}>
            <FaStar style={{ height: "36px", width: "24px" }} />
          </div>
        </div>
      </div>
      <div className="upcomming">
        <div className="upcoming_title">Upcoming Appointments</div>
        <div className="up_title">
          <div>PATIENTS</div>
          <div>TIME</div>
          <div>TYPE</div>
          <div>STATUS</div>
          <div>ACTION</div>
        </div>
        <div className="details">
          <div>
            <div className="view_name">Rahul Sharma</div>
            <div className="view_age">32 years, Male</div>
          </div>
          <div className="view_time">10:00AM</div>
          <div className="view_video_call">Video Call</div>
          <div className="view_upcomming">Upcoming</div>
          <div className="view_details">View details</div>
        </div>
      </div>
      <div className="flex_box">
        <div className="insights">
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
        <div className="tasks">
          <div className="task_title">Tasks</div>
          {tasks.map((task, index) => (
            <div className="check" key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                />
              </div>
              <span className={task.completed ? "strike" : ""}>
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
