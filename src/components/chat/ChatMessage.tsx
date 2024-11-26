import React from 'react';
import { Message } from '../../types';
import { format } from 'date-fns';

interface ChatMessageProps {
  message: Message;
  isOwn: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isOwn }) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
          isOwn ? 'bg-blue-500 text-white' : 'bg-gray-100'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        {message.mediaUrl && (
          <img
            src={message.mediaUrl}
            alt="Shared media"
            className="mt-2 rounded-lg max-w-full"
          />
        )}
        <span className="text-xs opacity-70 mt-1 block">
          {format(new Date(message.sentAt), 'HH:mm')}
        </span>
      </div>
    </div>
  );
};