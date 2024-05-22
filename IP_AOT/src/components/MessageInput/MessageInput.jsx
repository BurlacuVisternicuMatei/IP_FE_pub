import React, { useState } from 'react';

const MessageInput = ({ onSendMessage, onAttachFile }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  const handleAttachFile = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      onAttachFile(files[0]);
    }
  };

  return (
    <div className="flex items-center p-4 bg-[#2B2B3E]">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message"
        className="flex-grow p-2 rounded-lg bg-[#3B3B4E] text-white mr-2"
      />
      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        onChange={handleAttachFile}
      />
      <button
        type="button"
        onClick={() => document.getElementById('file-input').click()}
        className="p-2 bg-blue-500 text-white rounded-lg mr-2"
      >
        📎
      </button>
      <button
        type="button"
        onClick={handleSend}
        className="p-2 bg-blue-500 text-white rounded-lg"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
