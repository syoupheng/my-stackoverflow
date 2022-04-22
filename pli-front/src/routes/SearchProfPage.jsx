import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useSearchTags from "../hooks/useSearchTags";
import { AuthContext } from "../providers/AuthProvider";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from "@material-ui/core";
import ProfessionalsList from "../components/ProfessionalsList";
import ContactModal from "../components/ContactModal";

const SearchProfPage = () => {
  const auth = useContext(AuthContext);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedPro, setSelectedPro] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const { data, status } = useSearchTags('');
  const tags = data || [];

  if (auth.user.role && auth.user.role !== 1) {
    return <Navigate to='/account' />
  }

  return (
    <div style={{ padding: "4rem", backgroundColor: "gray", width: "100%" }}>
      <h2>Entrez les domaines d'expertise que vous recherchez</h2>
      <br></br>
      {status === "success" && (
        <Autocomplete
          style={{marginBottom: "1rem"}}
          multiple
          id="tags-standard"
          options={tags.data.map(tag => tag.name)}
          defaultValue={[]}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Domaines d'expertise"
              placeholder="compétences"
            />
          )}
          value={selectedTags}
          onChange={(_event, newTags) => {
            setSelectedTags(newTags);
          }}
        />
      )}
      <ProfessionalsList tags={selectedTags} onSelectPro={setSelectedPro} onClose={setShowContactModal} />
      <ContactModal professional={selectedPro} open={showContactModal} onClose={setShowContactModal} />
    </div>
  );
}

export default SearchProfPage;