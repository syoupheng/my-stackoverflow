import useSearchProfessionals from "../hooks/useSearchProfessionals";
import { Button, Chip, Grid } from "@mui/material";

const ProfessionalsList = ({ tags, onSelectPro, onClose }) => {
  const { data, status, error } = useSearchProfessionals(tags.join('+'));
  const professionals = data || [];

  const handleClickRequest = professional => {
    onSelectPro(professional);
    onClose(true);
  }

  return (
    <ul>
      <h2>Liste des professionnels</h2>
      <br></br>
      {status === "loading" && <p>Loading...</p>}

      {status === "error" && (
        <p>
          {error.response.status === 404
            ? "Aucun résultat trouvé"
            : "Error fetching data..."}
        </p>
      )}

      {status === "success" && (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {professionals.data.length > 0
            ? professionals.data.map((professional) => (
                <Grid item xs={4}>
                  <div
                    style={{
                      margin: "1rem",
                      padding: "0.5rem",
                      backgroundColor: "white",
                      minHeight: "6rem",
                      borderRadius: "10px",
                    }}
                  >
                    <h4>{professional.username}</h4>
                    <br></br>
                    <p>
                      Entreprise :{" "}
                      {professional.company
                        ? professional.company
                        : "Non renseigné"}
                    </p>
                    <br></br>
                    <p>
                      Compétences :{" "}
                      {professional.skills.length > 0
                        ? professional.skills.map((skill) => (
                            <Chip
                              label={skill.name}
                              style={{
                                marginRight: "1rem",
                                marginBottom: "1rem",
                              }}
                            />
                          ))
                        : null}
                    </p>
                    <Button onClick={() => handleClickRequest(professional)} variant="contained" size="small">
                      Envoyer une demande
                    </Button>
                  </div>
                </Grid>
              ))
            : "Aucun résultat trouvé"}
        </Grid>
      )}
    </ul>
  );
}

export default ProfessionalsList;