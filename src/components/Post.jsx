
import React from "react";
import axios from "axios";

const Post = ({ post, onDelete }) => {
    if (!post) {
        return <p>Loading post...</p>;  // Handle undefined post safely
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:4000/api/posts/${post._id}`);
            onDelete(post._id);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <div className="post">
            <p>{post.content || "No content available"}</p>
            <small>by {post.author?.username || "Unknown"}</small>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Post;
