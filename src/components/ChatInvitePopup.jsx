import React, { useState } from 'react';
import { X, Search, Mail, Check, Clock } from 'lucide-react';
import sanduni from '../image/sanduni.jpg';
import daryl from '../image/daryl.jpg';
import donald from '../image/donald.jpg';
import kim from '../image/kim.jpg';
import saman from '../image/saman.jpg';
import sam from '../image/sam.jpg';

const userImages = {
  1: sam, // Sam Smith
  2: donald, // Donald Whiteman
  3: kim, // Kim Wexter
  4: saman, // Saman Rathwaite
  5: sanduni, // Sanduni Keeragala
  6: daryl, // Daryl Mitchell
};

const getAvatarUrl = (userId) => userImages[userId] || `/api/placeholder/${userId}/32`;

// InvitedUsersList Component
const InvitedUsersList = ({ users }) => {
  return (
    <div className="mt-4">
      <h3 className="text-left text-sm text-gray-600 mb-2">Invited ({users.length})</h3>
      <div className="flex flex-wrap gap-2">
        {users.map((user) => (
          <div 
            key={user.id} 
            className="flex items-center bg-white border rounded-[12px] pl-2 pr-3 py-1 shadow-sm border border-gray-400 h-14"
          >
            <img 
              src={getAvatarUrl(user.id)}
              alt={user.name} 
              className="w-8 h-8 rounded-full mr-2" 
            />
            <span className="text-sm font-medium">{user.name}</span>
            {user.status === 'pending' && (
              <div className="ml-2 flex items-center justify-center">
                <Clock className="w-4 h-4 text-orange-500" />
              </div>
            )}
            {user.status === 'accepted' && (
              <div className="ml-2 flex items-center justify-center border border-blue-500 rounded-full w-4 h-4">
                <Check className="w-2 h-2 text-blue-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// InvitationSuccessPopup Component
const InvitationSuccessPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Invitations Sent</h2>
          <p className="text-gray-600">Invitees will be notified via email or notifications</p>
        </div>
        <button 
          onClick={onClose}
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Main ChatInvitePopup Component
const ChatInvitePopup = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [invitedUsers, setInvitedUsers] = useState([]);
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);

  const userDatabase = {
    'darylmitch91@gmail.com': { id: 6, name: 'Daryl Mitchell', status: 'pending' },
    'samsmith@email.com': { id: 1, name: 'Sam Smith', status: 'accepted' },
    'dwhiteman@email.com': { id: 2, name: 'Donald Whiteman', status: 'pending' },
    'kwexter@email.com': { id: 3, name: 'Kim Wexter', status: 'pending' },
    'srathwaite@email.com': { id: 4, name: 'Saman Rathwaite', status: 'pending' },
    'skeeragala@gmail.com': { id: 5, name: 'Sanduni Keeragala', status: 'pending' },
  };

  const handleSearchInput = (value) => {
    setSearchTerm(value);
    if (value.includes('@') && userDatabase[value]) {
      const user = userDatabase[value];
      if (!selectedUsers.find((u) => u.id === user.id)) {
        setSelectedUsers([...selectedUsers, user]);
        setSearchTerm('');
      }
    }
  };

  const handleSendInvites = () => {
    setInvitedUsers([...invitedUsers, ...selectedUsers]);
    setSelectedUsers([]);
    setIsSuccessPopupVisible(true);
  };

  const handleSuccessClose = () => {
    setIsSuccessPopupVisible(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-2xl p-8 sm:p-12">
          <div>
            <h2 className="text-left text-xl sm:text-3xl font-semibold mb-3">Add people to the chat</h2>
            <h1 className="text-left text-sm sm:text-base mb-2">Type name or email address</h1>
          </div>

          <div className="relative mb-6 sm:mb-3">
            <div className="flex items-center border rounded-[12px] p-2 border-black">
              <div className="flex flex-wrap gap-2 flex-1">
                {selectedUsers.map((user) => (
                  <div key={user.id} className="flex items-center bg-gray-200 border rounded-[12px] pl-2 pr-1 py-3">
                    <img 
                      src={getAvatarUrl(user.id)} 
                      alt={user.name} 
                      className="w-6 h-6 rounded-full mr-1" 
                    />
                    <span className="text-sm">{user.name}</span>
                    <button
                      onClick={() => setSelectedUsers((users) => users.filter((u) => u.id !== user.id))}
                      className="ml-1 p-1 hover:bg-red-100 rounded-full"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  className="flex-1 min-w-[150px] outline-none px-2 py-2"
                  value={searchTerm}
                  onChange={(e) => handleSearchInput(e.target.value)}
                  placeholder=""
                />
              </div>
              <Search className="w-6 h-6 text-gray-700 mr-2" size={20} />
            </div>
          </div>

          {invitedUsers.length > 0 && (
            <InvitedUsersList users={invitedUsers} />
          )}

          {searchTerm && !searchTerm.includes('@') && (
            <div className="mb-1">
              <div className="text-left text-sm sm:text-base text-gray-500 mb-2 sm:mb-1 mt-2">Suggestions</div>
              <div className="space-y-1 sm:space-y-2">
                {Object.values(userDatabase)
                  .filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((user) => (
                    <button
                      key={user.id}
                      className="flex items-center w-full p-2 sm:p-1 hover:bg-gray-50 rounded-lg"
                      onClick={() => {
                        if (!selectedUsers.find((u) => u.id === user.id)) {
                          setSelectedUsers([...selectedUsers, user]);
                        }
                        setSearchTerm('');
                      }}
                    >
                      <img
                        src={getAvatarUrl(user.id)}
                        alt={user.name}
                        className="w-8 h-8 rounded-full mr-2 sm:mr-3"
                      />
                      <span className="text-sm sm:text-base">{user.name}</span>
                    </button>
                  ))}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 mt-4 sm:mt-6">
            <button onClick={onClose} className="px-4 py-2 sm:px-5 sm:py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg">
              Cancel
            </button>
            <button
              onClick={handleSendInvites}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              disabled={selectedUsers.length === 0}
            >
              Send invite(s)
            </button>
          </div>
        </div>
      </div>
      <InvitationSuccessPopup isOpen={isSuccessPopupVisible} onClose={handleSuccessClose} />
    </>
  );
};

export default ChatInvitePopup;