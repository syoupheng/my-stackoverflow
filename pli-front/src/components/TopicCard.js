import { Button } from "@material-ui/core";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import DeleteTopicModal from "./DeleteTopicModal";

const TopicCard = ({ topic }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <>
      <Link to={`/topics/${topic.id}`}>
        <h3>{topic.title}</h3>
        <p>
          {topic.content.length > 100
            ? topic.content.substring(0, 100) + "..."
            : topic.content}
        </p>
        <div>Posté le {topic.created_at.substring(0, 10)}</div>
      </Link>
      {auth.user?.id === topic.author ? (
        <>
          <Link to={`/topics/${topic.id}/edit`}>
            <Button variant="contained">Modifier</Button>
          </Link>
          <Button
            onClick={() => setShowDeleteModal(true)}
            variant="contained"
          >
            Supprimer
          </Button>
        </>
      ) : null}
      <DeleteTopicModal
        topic={topic}
        open={showDeleteModal}
        onClose={setShowDeleteModal}
      />
    </>
  );
}

export default TopicCard;