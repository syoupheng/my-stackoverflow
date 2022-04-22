import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/Video.css";

function Video({ image, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="video">
            <Avatar className="video_avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    );
}

export default Video;
