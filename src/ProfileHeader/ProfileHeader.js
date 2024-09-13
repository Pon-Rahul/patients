import React from "react";
import "./ProfileHeader.css";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="profile_header">
      <div className="profile_title" onClick={() => navigate('/dashboard')}>Wekitsak</div>
      <div className="icons">
      <IoNotifications className="notification"/>
      <IoMdSettings className="notification"/>
      <IoPersonCircle className="profile_header_pic"/>
      </div>
    </div>
  );
};
export default ProfileHeader;
