import React from "react";
import "./Profile.css";
import { FaCalendarPlus } from "react-icons/fa";
import { FaFileMedicalAlt } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { FaHeartPulse } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

const Profile = () => {
  return (
    <div className="profile_page">
      <div className="welcome">Welcome back, Priya</div>
      <div className="top_box">
        <div className="quick">
          <div className="quick_action">Quick Actions</div>
          <div className="quick_flex">
            <div className="option_flex">
              <div className="options">
                <FaCalendarPlus /> Book Appoinment
              </div>
              <div className="options">
                <FaHandHoldingMedical /> My Medicines
              </div>
            </div>
            <div className="option_flex">
              <div className="options">
                <IoMdVideocam /> Video Consult
              </div>
              <div className="options">
                <FaFileMedicalAlt /> Lab Tests
              </div>
            </div>
          </div>
        </div>
        <div className="upcomming_appoinment">
          <div className="appoinment">Upcomming Appoinment</div>
          <div className="upcomming_content">
            <div>
              <IoPersonCircleSharp className="profile_counter"/>
            </div>
            <div>
              <div className="doctor">Dr.Patel</div>
              <div className="designation">Cardiologist</div>
              <div className="time">Today, 10:00 AM</div>
            </div>
          </div>
          <button className="button-12">Join Video Call</button>
        </div>
      </div>
      <div>
        <div className="health_insights">Health Insights</div>
        <div className="todoz">
          <div className="insights_box">
            <div className="insights_box_content">
              <div className="insights_topic">Heart Rate</div>
              <div className="view_number" style={{ color: "#00B8A9" }}>
                72 <span className="kg">bpm</span>
              </div>
              <div className="view_count">Last updated: 2 hours ago</div>
            </div>
            <div>
              <FaHeartPulse className="insights_icon" />
            </div>
          </div>
          <div className="insights_box">
            <div className="insights_box_content">
              <div className="insights_topic">Blood Pressure</div>
              <div className="view_number" style={{ color: "#00B8A9" }}>
                120/80 <span className="kg">mmHg</span>
              </div>
              <div className="view_count">Last updated: 1 day ago</div>
            </div>
            <div>
              <FaHeart className="insights_icon" />
            </div>
          </div>
          <div className="insights_box">
            <div className="insights_box_content">
              <div className="insights_topic">Weight</div>
              <div className="view_number" style={{ color: "#00B8A9" }}>
                65 <span className="kg">kg</span>
              </div>
              <div className="view_count">Last updated: 3 days ago</div>
            </div>
            <div>
              <FaWeight className="insights_icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="recent_activity">
        <div className="appoinment">Recent activity</div>
        <div>
          <div className="detail">
            <div className="color"></div>
            <div>
            <div className="blood_test">Blood Test Results Uploaded</div>
            <div className="ago">3 days ago</div>
            </div>
          </div>
          <div className="detail">
            <div className="color"></div>
            <div>
            <div className="blood_test">Prescription Renewed</div>
            <div className="ago">1 week ago</div>
            </div>
          </div>
          <div className="detail">
            <div className="color"></div>
            <div>
            <div className="blood_test">Teleconsultation with Dr. Singh</div>
            <div className="ago">2 weeks ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
