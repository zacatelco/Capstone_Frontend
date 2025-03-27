
import React, { useEffect, useState } from 'react';
import { fetchRandomUser } from '../api/api';
import './ProfilePage.css'; 

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const randomUser = await fetchRandomUser();
        setUser(randomUser);
      } catch (error) {
        console.error("Error loading user:", error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  if (loading) return <div className="loading">Loading profile...</div>;
  if (!user) return <div className="error">No profile available</div>;

  return (
    <div className="myspace-profile-card">
      <div className="profile-banner">
        <img 
          src={user.picture.large} 
          alt={`${user.name.first}'s profile`}
          className="profile-avatar"
        />
        <h1>{user.name.first} {user.name.last}</h1>
      </div>

      <div className="profile-body">
        <div className="profile-section">
          <p className="profile-quote">"{user.location.timezone?.description || 'Hey there!'}"</p>
          
          <div className="profile-details">
            <p><span className="detail-label">Age:</span> {user.dob.age}</p>
            <p><span className="detail-label">From:</span> {user.location.city}, {user.location.country}</p>
            <p><span className="detail-label">Status:</span> Online Now!</p>
            <p><span className="detail-label">Last Login:</span> {new Date(user.registered.date).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="contact-section">
          <h3>Contact Me:</h3>
          <div className="contact-buttons">
            <button className="myspace-button">Message</button>
            <button className="myspace-button">Add Friend</button>
            <button className="myspace-button">Add to Favorites</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;



























// import React, { useEffect, useState } from 'react';
// import { fetchRandomUser } from '../api/api'; // Adjust import path as needed

// const ProfileCard = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadRandomUser = async () => {
//       try {
//         const randomUser = await fetchRandomUser();
//         setUser(randomUser);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     loadRandomUser();
//   }, []);

//   if (loading) return <div>Loading user...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!user) return <div>No user found</div>;

//   // Map randomuser.me data to your card structure
//   return (
//     <div className="profile-card">
//       <div className="profile-header">
//         <img 
//           src={user.picture.large} 
//           alt={`${user.name.first}'s profile`}
//           className="profile-avatar"
//         />
//         <h1>{`${user.name.first} ${user.name.last}`}</h1>
//         <p className="quote">"{user.location.timezone.description || 'Hello world!'}"</p>
//       </div>

//       <div className="profile-details">
//         <p>{user.gender}</p>
//         <p>{user.dob.age} years old</p>
//         <p>{user.location.city}, {user.location.country}</p>
//         <p className="online-status">Online Now!</p>
//         <p>Last Login: {new Date(user.registered.date).toLocaleDateString()}</p>
//       </div>

//       <div className="profile-actions">
//         <h3>Contacting {user.name.first}</h3>
//         <div className="action-buttons">
//           <button>Send Message</button>
//           <button>Add to Friends</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
