import React from 'react';
import { Card } from 'react-bootstrap';
import AddMessagesForm from './AddMessagesForm';
import Messages from './Messages';

const ChatView: React.FC = () => {
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
        <Messages />
        <hr />
        <AddMessagesForm />
      </Card.Body>
    </Card>
  );
};

export default ChatView;
