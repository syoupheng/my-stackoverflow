import React, { useContext, useState } from "react";
import "../styles/TopicPage.css";
import { Avatar, Button } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import ResponseList from "./ResponseList";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useDeleteTopic from "../hooks/useDeleteTopic";
import CommentList from "./CommentList";
import DeleteTopicModal from "./DeleteTopicModal";

const TopicPage = ({ topic, profilePic }) => {
  const auth = useContext(AuthContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="topic">
        <div className="topic_top">
          <Avatar src={profilePic} className="topic_avatar" />
          <div className="topic_topInfo">
            <h3>{topic.author.username}</h3>
            <p>Posté le {topic.created_at.substring(0, 10)}</p>
          </div>
        </div>

        <div className="topic_bottom">
          <h2>{topic.title}</h2>
          <p>{topic.content}</p>
          {auth.user?.id === topic.author.id ? (
            <>
              <Link to={`/topics/${topic.id}/edit`}>
                <Button variant="contained">Modifier</Button>
              </Link>
              <Button onClick={() => setShowDeleteModal(true)} variant="contained">
                Supprimer
              </Button>
            </>
          ) : null}
          <DeleteTopicModal
            topic={topic}
            open={showDeleteModal}
            onClose={setShowDeleteModal}
          />
        </div>
        <div className="topic_bottom"></div>

        <div className="topic_options">
          <div className="topic_option">
            <ThumbUpIcon />
            <p>Aimer</p>
          </div>
          <div className="topic_option">
            <ChatBubbleOutlineIcon />
            <p>Commenter</p>
          </div>
          <div className="topic_option">
            <NearMeIcon />
            <p>Partager</p>
          </div>
          <div className="topic_option">
            <AccountCircleIcon />
            <ExpandMoreOutlined />
          </div>
        </div>
        <CommentList
          comments={topic.comments || []}
          parent="topic"
          parentId={topic.id}
        />
      </div>
      <ResponseList topicId={topic.id} />
    </>
  );
}

export default TopicPage;