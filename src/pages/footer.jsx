import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-part-one">
        {/* Left Section: Logo & Description */}
        <div className="left-part">
          <div className="logo-group">
            <div className="logo-icon">
              <GraduationCap className="icon-white" />
            </div>
            <div className="logo-texts">
              <h3 className="logo-title">AUCA CUPURI</h3>
              <p className="logo-subtitle-footer">Past Exams Portal</p>
            </div>
          </div>

          <div className="footer-description">
            Empowering AUCA students with comprehensive access to past
            examination papers across all faculties. Study smarter, achieve
            better results.
          </div>

          <div className="footer-images">
            <img
              src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop"
              alt="University"
              className="footer-img"
            />
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop"
              alt="Student"
              className="footer-img"
            />
          </div>
        </div>

        {/* Center Section: Quick Links */}
        <div className="middle-part">
          <h2 className="title">Quick Links</h2>
          <ul className="lists">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/browse">Browse Exams</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Faculties */}
        <div className="right-part">
          <h2 className="title">Faculties</h2>
          <ul className="lists">
            <li>
              <a>Software Engineerin</a>g
            </li>
            <li>
              <a> Information Management</a>
            </li>
            <li>
              <a> Networking & Telecommunications</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="line-separator" />

      <div className="footer-part-two">
        <div className="footer-copy">
          © 2024 AUCA CUPURI Portal. All rights reserved.
        </div>
        <div className="footer-credit">
          Developed with <span className="footer-love">❤️</span> by{" "}
          <span className="footer-author">Prince Cuthbert</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
