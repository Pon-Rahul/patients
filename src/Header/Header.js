import React, { useState } from "react";
import "./Header.css";
import { IoMdVideocam } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MediaQuery } from "../MediaQuery/MediaQuery";
import { Offcanvas } from "react-bootstrap";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdSick } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Header = ({title}) => {
  const isMobile = MediaQuery().isMobile;
  const isTabOnly = MediaQuery().isTabOnly;
  const [showMenu, setShowMenu] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("");

 
  const handleMenuClick = (newTitle, path) => {
    setSelectedMenu(path);
    setHeaderTitle(newTitle); 
    navigate(path); 
    setShowMenu(false); 
  };

  return (
    <div
      className="header"
      style={{ width: isTabOnly ? "100%" : isMobile ? "100%" : "80%" }}
    >
      {isMobile || isTabOnly ? (
        <div className="title_flex">
        <IoMdMenu onClick={() => setShowMenu(true)} className="menu_icon"/>
        <div className="canvas_title">Wekitsak</div>
        </div>
      ) : (
        <div></div>
      )}

      <Offcanvas
      className="canvas_body"
      show={showMenu}
      onHide={() => setShowMenu(false)}
      backdrop="static"
      placement="end"
    >
      <Offcanvas.Header className="canvas_head">
        <Offcanvas.Title className="canvas_title">Wekitsak</Offcanvas.Title>
        <IoCloseCircleOutline
          onClick={() => {
            setShowMenu(false);
          }}
          className="menu_icon"
        />
      </Offcanvas.Header>

      <Offcanvas.Body>
        <div className="menu_wrap">
          <div
            className={`menuitem ${selectedMenu === "/dashboard" ? "active" : ""}`}
            onClick={() => handleMenuClick("Dashboard", "/dashboard")}
          >
            <IoIosSpeedometer /> Dashboard
          </div>
          <div
            className={`menuitem ${selectedMenu === "/appointments" ? "active" : ""}`}
            onClick={() => handleMenuClick("Appointments", "/appointments")}
          >
            <FaCalendarAlt /> Appointments
          </div>
          <div
            className={`menuitem ${selectedMenu === "/patients" ? "active" : ""}`}
            onClick={() => handleMenuClick("Patients", "/patients")}
          >
            <MdSick /> Patients
          </div>
          <div
            className={`menuitem ${selectedMenu === "/analytics" ? "active" : ""}`}
            onClick={() => handleMenuClick("Analytics", "/analytics")}
          >
            <IoBarChartSharp /> Analytics
          </div>
          <div
            className={`menuitem ${selectedMenu === "/settings" ? "active" : ""}`}
            onClick={() => handleMenuClick("Settings", "/settings")}
          >
            <IoMdSettings /> Settings
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>

      <div className="header_title">{isMobile || isTabOnly ? (headerTitle):(title) }</div>

      <div className="button_div">
        <button className="button-3">
          <IoMdVideocam style={{ height: "20px", width: "24px" }} /> Start Consultation
        </button>
        <IoPersonCircle
          onClick={() => navigate("/profile")}
          className="profile_pic"
        />
      </div>
    </div>
  );
};

export default Header;
