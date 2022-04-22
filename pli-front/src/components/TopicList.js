import TopicCard from "./TopicCard";

const TopicList = ({ topics }) => {
  return (
    <>
      {topics.map(topic => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </>
  )
}

export default TopicList;