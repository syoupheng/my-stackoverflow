import { Chip } from "@material-ui/core";
import { useContext } from "react";
import useDeleteUserTag from "../hooks/useDeleteUserTag";
import { AuthContext } from "../providers/AuthProvider";

const MyTagList = () => {
  const auth = useContext(AuthContext);
  const skills = auth.user.skills || [];
  const deleteUserTagMutation = useDeleteUserTag();
  const handleClickDeleteButton = tagId => {
    deleteUserTagMutation.mutate(tagId);
  }

  return (
    <div>
      {skills.length > 0
        ? skills.map((skill) => (
            <Chip
              label={skill.name}
              onDelete={() => handleClickDeleteButton(skill.id)}
              style={{marginRight: "1rem", marginBottom: "1rem"}}
            />
          ))
        : "Vous n'avez pas renseigné de compétences"}
    </div>
  );
}

export default MyTagList;