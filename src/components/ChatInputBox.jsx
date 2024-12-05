import React, { useState } from "react";

const ChatInputBox = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message); 
      setMessage(""); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center p-4 rounded-sm">
      <textarea
        className="flex-grow p-2 resize-none border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
        rows="1"
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        className="ml-3 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInputBox;
