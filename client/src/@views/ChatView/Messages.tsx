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
    </div>
  );
};

export default Messages;
