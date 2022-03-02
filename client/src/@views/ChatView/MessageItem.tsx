import React from 'react';

interface MessageItemProps {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  message,
  photo,
  userId,
  userName,
}) => {
  return (
    <li className="chat-left">
      <div className="chat-avatar">
        <img src={photo} alt={`${userName}-${userId}`} />
        <div className="chat-name">{userName}</div>
      </div>
      <div className="chat-text">{message}</div>
      <div className="chat-hour">
        08:55 <span className="fa fa-check-circle" />
      </div>
    </li>
  );
};
