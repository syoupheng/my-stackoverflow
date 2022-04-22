import { Button } from "@material-ui/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MyQuestionList from "../components/MyQuestionList";
import MyResponsesList from "../components/MyResponsesList";
import MyTagList from "../components/MyTagList";
import { AuthContext } from "../providers/AuthProvider";
import EditIcon from '@material-ui/icons/Edit';
import ContactRequests from "../components/ContactRequests";

const AccountPage = () => {
  const auth = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: "white", width: "100%" }}>
      <h2>
        My Account :{" "}
        <Link to="/account/edit">
          <EditIcon />
        </Link>
      </h2>
      <div>
        <p>Rôle : {auth.user.role === 2 ? "Professionnel" : "Etudiant"}</p>
        <p>Username : {auth.user.username}</p>
        <p>First name : {auth.user.first_name}</p>
        <p>Last name : {auth.user.last_name}</p>
        <p>Email : {auth.user.email}</p>
        {auth.user.role === 2 ? <p>Entreprise : {auth.user.company}</p> : null}
      </div>
      <h3>Mes demandes de contact : </h3>
      <ContactRequests />
      {auth.user.role !== 2 ? null : (
        <>
          <h3>
            Mes compétences :{" "}
            <Link to="/tags/edit">
              <EditIcon />
            </Link>
          </h3>
          <br></br>
          <MyTagList />
        </>
      )}
      <MyQuestionList />
      <MyResponsesList />
    </div>
  );
}

export default AccountPage;