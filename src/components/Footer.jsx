import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <div className="myspace-footer">
      <div className="footer-content">
    
      <div className="footer-section">
          <h3 className="footer-heading">MySpace</h3>
          <div className="footer-links">
            <a href="#">About</a>
            <span>|</span>

            <a href="#">Terms</a>
            <span>|</span>

            <a href="#">Privacy</a>
            <span>|</span>

            <a href="#">Safety Tips</a>
            <span>|</span>

            <a href="#">Jobs</a>
            <span>|</span>

            <a href="#">Advertise</a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Subscribe</h3>
          <div className="footer-subscribe">
            <input type="text" placeholder="Your Email" className="footer-input" />
            <button className="footer-button">Subscribe</button>
          </div>
          <div className="footer-social">
            <span>Follow us:</span>
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">IG</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MySpace Clone | A Nostalgic Project</p>
      </div>
    </div>
  );
};

export default Footer;