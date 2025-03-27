import React from 'react';
import PropTypes from 'prop-types';
import "./ProfilePage.css"

const ProfilePage = ({ user = {}, posts = [], friends = [] }) => {
  const { username = 'User', bio = '' } = user;

  return (
      <div className="profile-content">
          <div className="profile-section">
              <h2>{username}'s Details</h2>
              <div className="details-content">
                  <p><strong>Bio:</strong> {bio || 'No bio provided'}</p>
              </div>
          </div>

          <div className="profile-section">
              <h2>{username}'s Posts</h2>
              {posts.length > 0 ? (
                  <ul className="posts-list">
                      {posts.map(post => (
                          <li key={post._id}>{post.content} - {post.author?.username || "Unknown"}</li>
                      ))}
                  </ul>
              ) : (
                  <p>No posts yet</p>
              )}
          </div>

          <div className="profile-section">
              <h2>{username}'s Friends</h2>
              {friends.length > 0 ? (
                  <div className="friend-grid">
                      {friends.map(friend => (
                          <div key={friend._id} className="friend">
                              <img 
                                  src={friend.profilePicture || 'default-avatar.jpg'} 
                                  alt={friend.username}
                              />
                              <p>{friend.username}</p>
                          </div>
                      ))}
                  </div>
              ) : (
                  <p>No friends yet</p>
              )}
          </div>
      </div>
  );
};

ProfilePage.propTypes = {
  user: PropTypes.object,
  posts: PropTypes.array,
  friends: PropTypes.array
};

export default ProfilePage;