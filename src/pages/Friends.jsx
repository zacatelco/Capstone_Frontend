
import React, { useState, useEffect } from "react";
import FriendsList from "../components/FriendsList";

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        // Fetch friends list from API
    }, []);

    return (
        <div >
            <FriendsList friends={friends} />
        </div>
    );
};

export default Friends;
