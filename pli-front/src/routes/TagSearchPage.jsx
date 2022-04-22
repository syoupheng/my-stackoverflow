import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import MyTagList from "../components/MyTagList";
import NewUserModal from "../components/NewUserModal";
import TagList from "../components/TagList";
import TagSearchBar from "../components/TagSearchBar";
import useSearchTags from "../hooks/useSearchTags";
import { AuthContext } from "../providers/AuthProvider";

const TagSearchPage = () => {
  const auth = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const { data, status, error } = useSearchTags(search);
  const tags = data || [];

  const location = useLocation();
  const showNewUserModal = location.state?.showModal || false;
  const [showModal, setShowModal] = useState(showNewUserModal);

  if (auth.user.role && auth.user.role !== 2) {
    return <Navigate to='/account' />
  }

  return (
    <div style={{padding: "4rem", backgroundColor: "gray", width: "100%"}}>
      <h2>Mes compétences :</h2>
      <br></br>
      <MyTagList />
      <h2 style={{marginBottom: "1rem"}}>Selectionnez vos compétences et domaines d'expertise :</h2>
      <TagSearchBar search={search} handleInputChange={setSearch} />
      {status === 'loading' && (
        <p>Loading...</p>
      )}    

      {status === 'error' && (
        <p>{error.response.status === 404 ? 'Aucun résultat trouvé' : 'Error fetching data...'}</p>
      )}

      {status === 'success' && (
        <TagList tags={tags.data} />
      )}
      <NewUserModal showModal={showModal} onClose={setShowModal} />
    </div>
  );
}

export default TagSearchPage;