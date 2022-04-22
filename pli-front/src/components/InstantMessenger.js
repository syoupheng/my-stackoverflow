import '../styles/InstantMessenger.css';
import SidebarChat from './SidebarChat';
import Chat from './Chat';

function InstantMessenger() {
  return (
    <div className="instantmessenger">
      <SidebarChat />
      <Chat />
    </div>
  );
}

export default InstantMessenger;
