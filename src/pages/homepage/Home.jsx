import React from "react";
import "../../css/homepage/header.css";
import { Link, useLocation } from "react-router-dom";

import {
  BookOpen,
  Users,
  FileText,
  Download,
  ArrowRight,
  GraduationCap,
  Library,
  Search,
} from "lucide-react";

import { BookOpenText, School, ListChecks } from "lucide-react";

import Footer from "../footer";

import "../../css/footer.css";
import "../../css/homepage/WelcomeBanner.css";
import "../../css/homepage/aboutSection.css";

function Home() {
  return (
    <>
      <Header />
      <WelcomeBanner />
      <AboutSection />
      <Footer />
    </>
  );
}

function Header({ isAuthenticated, user, logout }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-group">
          <div className="logo-icon">
            <GraduationCap className="icon-white" />
          </div>
          <div className="logo-texts">
            <h1 className="logo-title">AUCA CUPURI</h1>
            <p className="logo-subtitle">Past Exams Portal</p>
          </div>
        </Link>

        {isAuthenticated && (
          <nav className="main-nav">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}>
              <Home className="nav-icon" />
              <span>Home</span>
            </Link>
            <Link
              to="/browse"
              className={`nav-link ${isActive("/browse") ? "active" : ""}`}>
              <Search className="nav-icon" />
              <span>Browse</span>
            </Link>
            <Link
              to="/dashboard"
              className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}>
              <User className="nav-icon" />
              <span>Dashboard</span>
            </Link>
            {user?.role === "admin" && (
              <Link
                to="/upload"
                className={`nav-link ${isActive("/upload") ? "active" : ""}`}>
                <Upload className="nav-icon" />
                <span>Upload</span>
              </Link>
            )}
          </nav>
        )}

        <div className="user-menu">
          {isAuthenticated ? (
            <div className="user-info">
              <div className="user-name-role">
                <p className="user-name">{user?.name}</p>
                <p className="user-role">{user?.role}</p>
              </div>
              <button onClick={logout} className="logout-btn">
                <LogOut className="nav-icon red" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="login-link">
                Login
              </Link>
              <Link to="/signup" className="signup-btn">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function WelcomeBanner() {
  return (
    <div className="welcome-banner">
      <div className="banner-icon">
        <GraduationCap className="icon" />
      </div>
      <h1 className="banner-title">
        Welcome to <span className="highlight">AUCA CUPURI</span>
      </h1>
      <p className="banner-subtext">
        Your comprehensive portal for accessing past examination papers across
        all faculties. Study smarter with our organized collection of academic
        resources.
      </p>
      <div className="banner-buttons">
        <button className="btn-yellow">
          Get Started <ArrowRight size={16} />
        </button>
        <button className="btn-outline">Login</button>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-left">
        <div className="about-header">
          <BookOpenText className="icon" />
          <h2>
            About <span className="highlight">AUCA CUPURI</span>
          </h2>
        </div>
        <p>
          <strong>AUCA CUPURI</strong> (AUCA Comprehensive University Past
          Resources Initiative) is a dedicated digital platform designed to
          enhance academic excellence at Adventist University of Central Africa.
        </p>
        <p>
          Our portal serves as a centralized repository for past examination
          papers across all faculties, providing students with easy access to
          valuable study materials that can significantly improve their academic
          performance and exam preparation strategies.
        </p>

        <div className="mission-box">
          <strong>Our Mission</strong>
          <br />
          To democratize access to academic resources, foster collaborative
          learning, and empower students with the tools they need to excel in
          their studies through organized, easily accessible past examination
          materials.
        </div>

        <div className="about-highlights">
          <div className="highlight-box">
            <School size={40} className="school-icon" />
            <span>
              <strong>Organized by Faculty</strong>
              <br />
              Browse exams by Software Engineering, Information Management, and
              Networking & Telecommunications
            </span>
          </div>
          <div className="highlight-box">
            <ListChecks size={40} className="check-list-icon" />
            <span>
              <strong>Comprehensive Coverage</strong>
              <br />
              Access both Mid Term and Final exams from various academic years
            </span>
          </div>
        </div>
      </div>

      <div className="about-right">
        <img
          src="https://images.pexels.com/photos/5212351/pexels-photo-5212351.jpeg?auto=compress&cs=tinysrgb&h=300"
          alt="Student Success"
        />
        <p className="caption">Empowering Student Success</p>
        <small>
          Join thousands of students who have improved their academic
          performance using our platform
        </small>
      </div>
    </section>
  );
}

export default Home;
