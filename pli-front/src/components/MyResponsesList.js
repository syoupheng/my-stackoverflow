import { Link } from "react-router-dom";
import useFetchUserResponses from "../hooks/useFetchUserResponses";
import ResponseCard from "./ResponseCard";

const MyResponsesList = () => {
  const { data, error, status } = useFetchUserResponses();
  const responses = data || [];

  return (
    <>
      <h3>Mes réponses</h3>
      <div>
        {status === "loading" && <p>Loading...</p>}

        {status === "error" && (
          <p>
            {error.response.status === 404
              ? "Vous n'avez pas donné de réponses pour le moment"
              : `Error fetching data : ${error.message}`}
          </p>
        )}

        {status === "success" && (
          <div>
            {responses.data.map((response) => (
              <Link to={`/topics/${response.topic}`}>
                <div>
                  <p>{response.content}</p>
                  <div>Posté le {response.created_at.substring(0, 10)}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyResponsesList;