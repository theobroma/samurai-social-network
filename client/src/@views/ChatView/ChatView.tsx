import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import AddMessagesForm from './AddMessagesForm';
import Messages from './Messages';

const wsChanel = new WebSocket(
  'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx',
);

const ChatView: React.FC = () => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    wsChanel.addEventListener('message', (e) => {
      const newMessages = JSON.parse(e.data);
      setMessages((prevMessages: any) => [...prevMessages, ...newMessages]);
    });
  }, []);

  const BlockTitle = (
    <div className="row mt-4 mb-3">
      <div className="col-12">
        <div className="option-subheading">Chat</div>
      </div>
    </div>
  );

  return (
    <Card>
      <Card.Body>
        {BlockTitle}
        <Messages data={messages} />
        <AddMessagesForm wsChanel={wsChanel} />
      </Card.Body>
    </Card>
  );
};

export default ChatView;
