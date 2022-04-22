import { Avatar } from '@material-ui/core';
import React from 'react';
import "../styles/Message.css";

function Message() {
  return ( 
  <div className="message">
      <Avatar />
      <div className="message_info">
          <h4>Nom
          <span className="message_timestamp">Date</span>
          </h4>

          <p>Message</p>
      </div>
  </div>
  );
}

export default Message;
