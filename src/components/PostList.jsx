// import { useEffect, useState } from "react";
// import axios from "axios";
// import Post from "./Post";
// import CreatePost from "../components/CreatePost";

// const PostList = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:4000/api/posts")
//             .then((res) => {
//                 console.log("Fetched Posts:", res.data);
//                 setPosts(res.data);
//             })
//             .catch((err) => console.error("Error fetching posts:", err));
//     }, []);

//     return (
//         <div className="home-page">
//             <div className="main-content">
//                 {/* Handle post creation */}
//                 <CreatePost onPostCreated={(newPost) => setPosts([newPost, ...posts])} />

//                 {/* Handle post deletion */}
//                 <PostList posts={posts} onDelete={(id) => setPosts(posts.filter(post => post._id !== id))} />
//             </div>
//         </div>
//     );

// };

// export default PostList;

import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts")
      .then((res) => {
        console.log("Fetched Posts:", res.data);
        setPosts(res.data);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="home-page">
      <div className="main-content">
        {/* Display posts correctly */}
        <div className="post-list">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post
                key={post._id}
                post={post}
                onDelete={(id) => setPosts(posts.filter((p) => p._id !== id))}
              />
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostList;
