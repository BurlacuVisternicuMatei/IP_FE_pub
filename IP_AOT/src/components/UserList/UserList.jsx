import React from 'react';

const UserList = ({ users, onUserSelect, searchQuery, setSearchQuery }) => {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
  };

  return (
    <div className="user-list bg-light-blue h-full overflow-auto p-4">
      <h1 className="text-white text-2xl font-bold mb-2">Chat</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search people, group and messages"
        className="w-full p-2 mb-4 rounded-lg bg-[#2B2B3E] text-white placeholder-gray-300"
      />
      <h2 className="text-white text-xl mb-2">Recent</h2>
      {filteredUsers.map(user => (
        <div
          key={user.id}
          onClick={() => onUserSelect(user.id)}
          className="p-2 hover:bg-[#2B2B3E] cursor-pointer rounded-lg my-1 flex items-center justify-between text-white"
        >
          <div className="flex items-center">
            <img src={user.profilePicture} alt={`${user.name} profile`} className="profile-picture" />
            <div className="ml-2">
              <div className="font-bold">{user.name}</div>
              <div className="text-sm">{user.lastMessage}</div>
            </div>
          </div>
          <span className="text-xs">{formatDate(user.lastMessageTime)}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
