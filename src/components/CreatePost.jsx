import { useState } from "react";
import axios from "axios";
import "./CreatePost.css"; 
const API_BASE_URL =import.meta.env.VITE_API_BASE_URL; 


const CreatePost = ({ onPostCreated }) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content.trim()) {
            alert("Post cannot be empty!"); // MySpace-style alert
            return;
        }

        try {
            const res = await axios.post(`${API_BASE_URL}/api/posts`, {
                author: "{users._id}", // TEMP: Replace with actual user ID
                content: content,
            });

            onPostCreated(res.data); 
            setContent("");
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Error creating post!"); // MySpace-style error message
        }
    };

    return (
        <div className="myspace-create-post">
            <h3 className="post-title">CREATE NEW POST</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="myspace-textarea"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's on your mind?..."
                    rows="5"
                    required
                />
                <div className="button-container">
                    <button type="submit" className="myspace-button post-submit">
                        POST
                    </button>
                    <button 
                        type="button" 
                        className="myspace-button cancel"
                        onClick={() => setContent("")}
                    >
                        CLEAR
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;


// import { useState } from "react";
// import axios from "axios";

// const CreatePost = ({ onPostCreated }) => {
//     const [content, setContent] = useState("");
//     const [userId, setUserId] = useState("USER_ID_HERE"); // Set a default or dynamically retrieve the user ID

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!content.trim()) return; // Prevent empty posts

//         try {
//             const res = await axios.post("http://localhost:4000/api/posts", {
//                 author: userId, // Use dynamic user ID here
//                 content: content,
//             });

//             onPostCreated(res.data);  // Immediately update state with the new post
//             setContent(""); // Clear the content input
//         } catch (error) {
//             console.error("Error creating post:", error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                     placeholder="Write your post..."
//                 />
//                 <button type="submit">Post</button>
//             </form>
//         </div>
//     );
// };

// export default CreatePost;
