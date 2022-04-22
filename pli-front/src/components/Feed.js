import React from "react";
import "../styles/Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import VideoReel from "./VideoReel";

function Feed() {
    return (
        <div className="feed">
            <VideoReel />
            <MessageSender />
            <Post />
        </div>
    );
}

export default Feed;
