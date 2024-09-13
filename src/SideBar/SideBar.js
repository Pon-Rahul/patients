import React, { useState } from "react";
import "./SideBar.css";
import { MdSick } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SideBar = ({ onTitleChange }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("/dashboard");

 
  const handleNavigation = (path, title) => {
    onTitleChange(title); 
    setSelected(path); 
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div
        className="logo"
        onClick={() => handleNavigation("/dashboard", "Dashboard")}
      >
        Wekitsak
      </div>
      <div className="content">
        <p
          onClick={() => handleNavigation("/dashboard", "Dashboard")}
          className={selected === "/dashboard" ? "active" : ""}
        >
          <IoIosSpeedometer /> Dashboard
        </p>
        <p
          onClick={() => handleNavigation("/appointments", "Appointments")}
          className={selected === "/appointments" ? "active" : ""}
        >
          <FaCalendarAlt /> Appointments
        </p>
        <p
          onClick={() => handleNavigation("/patients", "Patients")}
          className={selected === "/patients" ? "active" : ""}
        >
          <MdSick /> Patients
        </p>
        <p
          onClick={() => handleNavigation("/analytics", "Analytics")}
          className={selected === "/analytics" ? "active" : ""}
        >
          <IoBarChartSharp /> Analytics
        </p>
        <p
          onClick={() => handleNavigation("/settings", "Settings")}
          className={selected === "/settings" ? "active" : ""}
        >
          <IoMdSettings /> Settings
        </p>
      </div>
    </div>
  );
};

export default SideBar;
