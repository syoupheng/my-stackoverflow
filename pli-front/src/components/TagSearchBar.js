import { TextField } from "@material-ui/core";

const TagSearchBar = ({ search, handleInputChange }) => {
  return (
    <TextField
      fullWidth
      label="Enter a tag name"
      id="fullWidth"
      style={{ backgroundColor: "white" }}
      onChange={e => handleInputChange(e.target.value)}
      value={search}
    />
  );
};

export default TagSearchBar;