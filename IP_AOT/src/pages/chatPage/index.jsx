import React, { useState, useEffect } from 'react';
import MessageList from '../../components/MessageList/MessageList';
import MessageInput from '../../components/MessageInput/MessageInput';
import UserList from '../../components/UserList/UserList';
import '../../styles/chatPage/index.css';
import { RemoveScrollBar, fullWidthClassName } from 'react-remove-scroll-bar';

function ChatPage() {
  const initialUsers = [
    {
      id: 1,
      name: "Rada rada",
      lastMessageTime: new Date().toISOString(),
      messages: [{ id: 101, text: "Hey! Cmf?", sender: 'other', senderName: "Rada Rada", timestamp: new Date().toISOString() }],
      profilePicture: "https://via.placeholder.com/40"
    },
    {
      id: 2,
      name: "Snitzel",
      lastMessageTime: new Date(Date.now() - 86400000).toISOString(),
      messages: [{ id: 102, text: "Merge treaba?", sender: 'me', senderName: 'Me', timestamp: new Date(Date.now() - 86400000).toISOString() }],
      profilePicture: "https://via.placeholder.com/40"
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [selectedUserId, setSelectedUserId] = useState(initialUsers[0].id);
  const [messages, setMessages] = useState(initialUsers[0].messages);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const selectedUser = users.find(user => user.id === selectedUserId);
    if (selectedUser) {
      setMessages(selectedUser.messages);
    }
  }, [selectedUserId, users]);

  const handleUserSelect = userId => {
    setSelectedUserId(userId);
  };

  const handleSendMessage = newMessage => {
    const newMessageObject = {
      id: Date.now(),
      text: newMessage,
      sender: 'me',
      senderName: 'Me',
      timestamp: new Date().toISOString()
    };

    const updatedUsers = users.map(user => {
      if (user.id === selectedUserId) {
        const updatedMessages = [...user.messages, newMessageObject];
        return { ...user, messages: updatedMessages, lastMessage: newMessage, lastMessageTime: newMessageObject.timestamp };
      }
      return user;
    });

    const selectedUser = updatedUsers.find(user => user.id === selectedUserId);
    const otherUsers = updatedUsers.filter(user => user.id !== selectedUserId);
    const sortedUsers = [selectedUser, ...otherUsers];

    setUsers(sortedUsers);
    setMessages(prevMessages => [...prevMessages, newMessageObject]);
  };

  const handleAttachFile = file => {
    const reader = new FileReader();
    reader.onload = () => {
      const newMessageObject = {
        id: Date.now(),
        text: '',
        attachment: reader.result,
        attachmentName: file.name,
        sender: 'me',
        senderName: 'Me',
        timestamp: new Date().toISOString()
      };

      const updatedUsers = users.map(user => {
        if (user.id === selectedUserId) {
          const updatedMessages = [...user.messages, newMessageObject];
          return { ...user, messages: updatedMessages, lastMessage: file.name, lastMessageTime: newMessageObject.timestamp };
        }
        return user;
      });

      const selectedUser = updatedUsers.find(user => user.id === selectedUserId);
      const otherUsers = updatedUsers.filter(user => user.id !== selectedUserId);
      const sortedUsers = [selectedUser, ...otherUsers];

      setUsers(sortedUsers);
      setMessages(prevMessages => [...prevMessages, newMessageObject]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`flex h-screen bg-[#212130] ${fullWidthClassName}`}>
      <RemoveScrollBar />
      <UserList users={users} onUserSelect={handleUserSelect} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex-grow flex flex-col overflow-hidden">
        <div className="message-list-container overflow-y-auto no-scrollbar">
          <MessageList messages={messages} />
        </div>
        <div className="message-input-container">
          <MessageInput onSendMessage={handleSendMessage} onAttachFile={handleAttachFile} />
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
