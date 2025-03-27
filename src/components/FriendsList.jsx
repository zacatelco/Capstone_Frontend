import React, { useState, useEffect } from "react";
import { fetchRandomUsers } from "../api/api";
import "./FriendsList.css";
import { IoLocation } from "react-icons/io5";

const FriendsList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const usersData = await fetchRandomUsers(); // Fetch 8 random users
        console.log("Friends List Users:", usersData); // Log users data for debugging
        setUsers(usersData); // Set the users to state
        setLoading(false); // Set loading state to false
      } catch (err) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    getUsersData();
  }, []);

  if (loading) {
    return <p>Loading friends...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="friends-container">
      <h2>Find New Friends</h2>
      <ul className="friends-grid">
        {users.slice(0, 16).map(
          (
            user,
            index 
          ) => (
            <li key={index} className="friend-card">
              <img
                src={user.picture.thumbnail}
                alt="Friend Profile"
                className="friend-avatar"
              />
              <p className="friend-name">
                {user.name.first} {user.name.last}
              </p>

              
                
              <div className="friend-location">
              <IoLocation className="location-icon" />
              <span>
                {user.location.city}, {user.location.country}
              </span>
            </div>
              

              <p className="friend-username">
                {" "}
                Username: {user.login.username}
              </p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FriendsList;
