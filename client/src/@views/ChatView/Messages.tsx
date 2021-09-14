import React from 'react';
import { MessageItem } from './MessageItem';

interface MessagesProps {
  data: any;
}

const Messages: React.FC<MessagesProps> = ({ data }) => {
  return (
    <div className="chat-container">
      <ul className="chat-box chatContainerScroll">
        {data &&
          data.map((item: any) => (
            <MessageItem
              message={item.message}
              photo={item.photo}
              userId={item.userId}
              userName={item.userName}
            />
          ))}
      </ul>
      <div className="form-group mt-3 mb-0">
        <textarea
          className="form-control"
          rows={3}
          placeholder="Type your message here..."
          defaultValue=""
        />
      </div>
    </div>
  );
};

export default Messages;
