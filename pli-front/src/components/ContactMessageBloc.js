import { Avatar, Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const ContactMessageBloc = ({ message }) => {
  const auth = useContext(AuthContext);

  return (
    <div
      style={{
        margin: "1rem",
        padding: "0.5rem",
        backgroundColor: "white",
        borderRadius: "10px",
        border: "solid 1px black",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        {auth.user.role === 1 ? (
          <>
            <div style={{ display: "flex" }}>
              <Avatar style={{ marginRight: "1rem" }} />
              <h2>{message.professional.username}</h2>
            </div>
            <p>{message.professional.company}</p>
          </>
        ) : (
          <div style={{ display: "flex" }}>
            <Avatar style={{ marginRight: "1rem" }} />
            <h2>{message.student.username}</h2>
          </div>
        )}
      </div>
      <p
        style={{
          padding: "0.5rem",
          backgroundColor: "white",
          borderRadius: "10px",
          border: "solid 1px #D3D3D3",
        }}
      >
        {message.content}
      </p>
      {auth.user.role === 2 ? (
        <>
          <Button variant="text" style={{color:"red"}}>Ignorer</Button>
          <Button variant="text">Accepter</Button>
        </>
      ) : null}
    </div>
  );
}

export default ContactMessageBloc;