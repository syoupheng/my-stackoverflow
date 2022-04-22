import React, { useContext } from "react";
import "../styles/Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, Button, IconButton, Link } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchBar from "./SearchBar";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logo from "../assets/img/Logo_Forum.png";
import ContactSupportTwoToneIcon from '@material-ui/icons/ContactSupportTwoTone';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';

function Header() {
  const auth = useContext(AuthContext);

  return (
    <div className="header">
      <div className="header_left">
        <RouterLink to="/">
          <img src={logo} alt="" className="nav-logo" />
        </RouterLink>
        <SearchBar />
      </div>
      <div className="header_center">
        <div
          className="header_option
                header_option--active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        {auth.user && (auth.user.role === 1) ? (
          <div className="header_option">
            <RouterLink to="/professional/search">
              <SupervisedUserCircleIcon fontSize="large" />
            </RouterLink>
          </div>
        ) : null}
      </div>
      <div className="header_right">
        {auth.user && (
          <div className="header_info">
            <RouterLink to="/account">
              <Avatar />
              <span>
                <h4>{auth.user ? auth.user.username : null}</h4>
              </span>
            </RouterLink>
          </div>
        )}
        {auth.user ? null : (
          <RouterLink to="/login">
            <IconButton>
              <VpnKeyTwoToneIcon />
            </IconButton>
          </RouterLink>
        )}
        <RouterLink to="/topics/ask">
          <IconButton>
            <ContactSupportTwoToneIcon variant="contained">
              Poster une question
            </ContactSupportTwoToneIcon>
          </IconButton>
        </RouterLink>
        <IconButton>
          <AddIcon />
        </IconButton>
        <RouterLink to="/messagerie">
          <IconButton>
            <ForumIcon />
          </IconButton>
        </RouterLink>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
        {auth.user && (
          <IconButton
            onClick={async () => {
              await auth.logout();
            }}
          >
            Logout
          </IconButton>
        )}
      </div>
    </div>
  );
}

export default Header;
