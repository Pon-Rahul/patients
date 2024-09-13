import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_flex">
        <div>© 2024 Wekitsak. All rights reserved.</div>
        <div className="footer_content">
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
          <div>Contact Us</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
