import useFetchUserTopics from "../hooks/useFecthUserTopics";
import TopicCard from "./TopicCard";

const MyQuestionList = () => {
  const { data, error, status } = useFetchUserTopics();
  const topics = data || [];

  return (
    <>
      <h3>Mes questions</h3>
      <div>
        {status === "loading" && <p>Loading...</p>}

        {status === "error" && (
          <p>
            {error.response.status === 404
              ? "Vous n'avez pas encore posé de questions"
              : `Error fetching data : ${error.message}`}
          </p>
        )}

        {status === "success" && (
          <div>
            {topics.data.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyQuestionList;