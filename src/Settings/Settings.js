import React from "react";
import "./Settings.css";
import { FaCalendar } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaStar } from "react-icons/fa";

const Settings = () => {
  return (
    <div className="set">
      <div>
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
              <GrDocumentPerformance
                style={{ height: "36px", width: "24px" }}
              />
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
      </div>
      <div style={{marginTop:'24px'}}>
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
              <GrDocumentPerformance
                style={{ height: "36px", width: "24px" }}
              />
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
      </div>
    </div>
  );
};

export default Settings;
