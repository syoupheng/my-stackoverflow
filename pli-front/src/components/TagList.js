import { Button, Grid } from "@material-ui/core";
import useAddUserTag from "../hooks/useAddUserTag";

const TagList = ({ tags }) => {
  const addUserTagMutation = useAddUserTag();
  const handleClickAddButton = async tagId => {
    try {
      await addUserTagMutation.mutateAsync(tagId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {tags.map((tag) => (
        <Grid item xs={4}>
          <div
            style={{
              margin: "1rem",
              padding: "0.5rem",
              backgroundColor:"white",
              minHeight: "6rem",
              borderRadius:"10px"
            }}
          >
            <h4>{tag.name}</h4>
            <br></br>
            <p>
              {tag.description.length > 100
                ? tag.description.substring(0, 100) + "..."
                : tag.description}
            </p>
            <br></br>
            <Button variant='contained' size='small' onClick={() => handleClickAddButton(tag.id)}>Ajouter</Button>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default TagList;