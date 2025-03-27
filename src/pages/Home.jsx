import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/Home.css";
const Home = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.toLocaleString("default", {
      weekday: "long",
    })}, ${date.getDate()} ${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="home-container">
      <div className="left-column">
        <h2>Today on Myspace</h2>
        <p className="today-date">{currentDate}</p>
      </div>

      <div className="right-column">
        <div className="auth-box">
          <div className="tabs">
            <button className="active-tab">Log In</button>
            <button>Sign Up</button>
          </div>
          <form className="auth-form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log In</button>
          </form>
        </div>

        <div className="search-friends">
          <h3>Find your friends on MySpace</h3>
          <input type="text" placeholder="Search friends..." />
        </div>
      </div>
    </div>
  );
};

export default Home;
