import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserGroupIcon, PlusIcon } from "@heroicons/react/24/outline";
import ChatInvitePopup from "./ChatInvitePopup";
import profile1 from "../assets/profile1.jpg";

const ChatHead = ({ avatar, username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const popupRef = useRef(null); // Reference to the popup

  

  useEffect(() => {
    // Close the popup if clicked outside
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false); // Close the popup if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = () => {
    navigate("/"); // Navigate to the chat page when the button is clicked
  };

  return (
    <div className="flex items-center justify-between p-4 px-52 mb-16">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <img src={profile1} alt="Avatar" className="w-10 h-10 rounded-md" />

        {/* Username */}
        <span className="text-2xl font-bold text-blue-900">Nipun Jayasinghe</span>
      </div>
      <div className="flex gap-2">
        <button
          className="relative w-11 h-11 bg-white rounded-md"
          onClick={() => setIsOpen(true)} // Open the popup
        >
          <UserGroupIcon className="absolute h-6 w-6 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2" />
        </button>
        <button className="relative w-11 h-11 bg-white rounded-md">
          <PlusIcon
            onClick={handleClick} // Call handleClick function on button click
            className="absolute h-6 w-6 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2"
          />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
            ref={popupRef} // Attach the reference to the popup div
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">People in the Chat</h2>
              <div className="flex items-center">
                <button onClick={() => setIsOpen(false)}>&times;</button>
              </div>
            </div>
            <br />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsOpen(true)}
            >
              Add
            </button>
            <ChatInvitePopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHead;
