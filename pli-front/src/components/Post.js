import { Avatar } from "@material-ui/core";
import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import "../styles/Post.css";

function Post({ profilePic }) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post_topInfo">
                    <h3>RPGCU</h3>
                    <p>Posté le 2022-02-20</p>
                </div>
            </div>
            
            <div className="post_bottom">
                <p>How to install semantic ui</p>
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Aimer</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Commenter</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Partager</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>

            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post_topInfo">
                    <h3>Nabd</h3>
                    <p>Posté le 2022-02-20</p>
                </div>
            </div>
            
            <div className="post_bottom">
                <p>how to make a search-bar to filter a datajson list and open a file in the page</p>
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Aimer</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Commenter</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Partager</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>

            <div className="post_top">
                <Avatar src={profilePic} className="post_avatar" />
                <div className="post_topInfo">
                    <h3>shiva kumar</h3>
                    <p>Posté le 2022-02-20</p>
                </div>
            </div>
            
            <div className="post_bottom">
                <p>What is the difference between React Native and React?</p>
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Aimer</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Commenter</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Partager</p>
                </div>
                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    );
}

export default Post;
