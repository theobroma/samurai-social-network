import React, { useEffect, useState } from 'react';
import { MessageItem } from './MessageItem';

type MessageItemProps = React.ComponentProps<typeof MessageItem>;

interface MessagesProps {
  wsChanel: WebSocket | null;
}

const Messages: React.FC<MessagesProps> = ({ wsChanel }) => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    wsChanel?.addEventListener('message', (e) => {
      const newMessages = JSON.parse(e.data);
      setMessages((prevMessages: MessageItemProps[]) => [
        ...prevMessages,
        ...newMessages,
      ]);
    });
  }, [wsChanel]);

  return (
    <div className="chat-container">
      <ul className="chat-box chatContainerScroll">
        {messages &&
          messages.map((item: MessageItemProps) => (
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
