import React, { useState } from "react";
import axios from "axios";
import "./CommentForm.css"; 
const API_BASE_URL =import.meta.env.VITE_API_BASE_URL; 



const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const commentData = {
        content: comment,
        author: "USER_ID", 
      };
      await axios.post(`${API_BASE_URL}/api/posts/${postId}/comments`, commentData);
      setComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
      alert("Error posting comment!"); // MySpace-style alert
    }
  };

  return (
    <div className="myspace-comment-form">
      <h3 className="comment-title">Add Comment:</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          className="myspace-textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          required
          rows="4"
        />
        <div className="button-container">
          <button type="submit" className="myspace-button">
            Post Comment
          </button>
          <button 
            type="button" 
            className="myspace-button cancel"
            onClick={() => setComment("")}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;









// import React, { useState } from "react";
// import axios from "axios";

// const CommentForm = ({ postId }) => {
//   const [comment, setComment] = useState("");

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const commentData = {
//         content: comment,
//         author: "USER_ID", 
//       };

//       await axios.post(`/api/posts/${postId}/comments`, commentData);
//       alert("Comment added!");
//       setComment(""); 
//     } catch (error) {
//       console.error("Error posting comment:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleCommentSubmit}>
//       <textarea
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         placeholder="Add a comment"
//         required
//       />
//       <button type="submit">Comment</button>
//     </form>
//   );
// };

// export default CommentForm;