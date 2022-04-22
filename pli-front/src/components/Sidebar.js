import React from "react";
import "../styles/Sidebar.css";
import SidebarRow from "./SidebarRow";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchTopics = async () => {
  const res = await axios.get(`/forum/topics/`);
  return res;
}

function Sidebar() {
  const { data, status, error } = useQuery("recent_topics", fetchTopics);
  let topics = data || [];

  return (
    <div className="sidebar">
      {status === "loading" && "Loading..."}

      {status === "error" && (
        <p>Error fetching data : {error.message}</p>  
      )}

      {status === "success" && (
        <>
          {topics.data.slice(0, 10).map(topic => (
            <Link to={`/topics/${topic.id}`}>
              <SidebarRow
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png"
                title={topic.title}
              />
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

export default Sidebar;
