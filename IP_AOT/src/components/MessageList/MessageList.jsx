import React, { useEffect, useRef } from 'react';

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col p-4 space-y-2 overflow-y-auto no-scrollbar" style={{ maxHeight: '90vh' }}>
      {messages.map((message, index) => {
        const previousMessage = messages[index - 1];
        const showName = !previousMessage || previousMessage.sender !== message.sender;

        return (
          <div key={message.id} className={`chat-message p-2 rounded-lg shadow ${message.sender === 'me' ? 'bg-blue text-white self-end' : 'bg-light-blue text-white self-start'}`}>
            {showName && (
              <div className="flex items-center space-x-2 mb-2">
                {message.sender !== 'me' && (
                  <div className="rounded-full w-8 h-8 bg-gray-400"></div>
                )}
                <div className="text-sm text-white">{message.senderName}</div>
              </div>
            )}
            {message.text}
            {message.attachment && (
              <div className="mt-2">
                <a href={message.attachment} download={message.attachmentName} className="text-blue-500 underline">
                  {message.attachmentName}
                </a>
              </div>
            )}
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
