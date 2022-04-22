import React from 'react';
import "../styles/Chat.css";
import ChatHeader from './ChatHeader';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';

function Chat() {
  return (
  <div className="chat">
      <ChatHeader />

      <div className="chat_messages">
          <Message />
      </div>

      <div className="chat_input">
          <AddCircleIcon fontSize="large" />
          <form>
              <input placeholder= {`Message #TESTCHANNEL`} />
          </form>

          <div className="chat_inputIcons">
              <CardGiftcardIcon fontSize="large" />
              <GifIcon fontSize="large" />
              <EmojiEmotionsIcon fontSize="large" />
          </div>
      </div>
  </div>
  );
}

export default Chat;
