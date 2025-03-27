import axios from "axios"
import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
// import.meta.env.VITE_API_URL || 
// const BASE_URL = import.meta.env.VITE_API_BASE_URL ADD ABOVE!

// Fetch one random user
export const fetchRandomUser = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api/?results=1');
        return response.data.results[0];
    } catch (error) {
        throw new Error('Error fetching random user data');
    }
}


// Fetch multiple random users
export const fetchRandomUsers = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api', {
            params: { results: 20 }
        });
        return response.data.results; // Return the array of users
    } catch (error) {
        console.error('Error fetching random users:', error);
        throw error;
    }
};

// Fetch a specific user by ID
export const fetchUser = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

// Fetch all users
export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

// Fetch all posts
export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

// Fetch posts for a specific user
export const fetchUserPosts = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user posts:", error);
        throw error;
    }
};

// Fetch friends list
export const fetchFriends = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/friends/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching friends:", error);
        throw error;
    }
};

// Create a new post
export const createPost = async (postData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/posts`, postData);
        return response.data;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
};

// Delete a post
export const deletePost = async (postId) => {
    try {
        await axios.delete(`${API_BASE_URL}/posts/${postId}`);
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
};

// ADDED
// Update to use your actual backend endpoints
export const fetchAuthenticatedUser = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const updateUserProfile = async (userId, updateData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}users/${userId}`, updateData);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};