import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "../components/PostList";
import CreatePost from "../components/CreatePost";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";
import ProfilePage from "../components/ProfilePage";
import "../components/Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "MyUsername",
    bio: "This is my bio",
    profilePicture: "",
  });
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes] = await Promise.all([
          axios.get("http://localhost:4000/api/posts"),
          axios.get("http://localhost:4000/api/users"),
        ]);

        setPosts(postsRes.data);
        setFriends(usersRes.data.slice(0, 4)); // First 4 users as friends
      } catch (err) {
        console.error("Error fetching data:", err);
        // If users endpoint fails, set empty friends
        if (err.config.url.includes("posts")) {
          const postsRes = await axios.get("http://localhost:4000/api/posts");
          setPosts(postsRes.data);
        }
        setFriends([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading profile...</div>;

  return (
    <div className="profile-layout">
      <div className="profile-sidebar">
        <ProfileCard />
      </div>

      <div className="profile-main">
        <ProfilePage user={userData} posts={posts} friends={friends} />
        <CreatePost
          onPostCreated={(newPost) => setPosts([newPost, ...posts])}
        />

        {/* <PostList /> */}
      </div>
    </div>
  );
};

export default Profile;
