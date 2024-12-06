import React, { useState } from "react";
import { FaPaperclip, FaCamera, FaMicrophone } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { LuAudioLines } from "react-icons/lu";

const ChatInputBox = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      console.log("Message sent:", message);
      setMessage(""); // Clear the input box after sending
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center justify-center mt-6">
      <div className="relative w-full max-w-3xl">
        {/* Text Input Area */}
        <textarea
          className="w-full p-3 pl-10 pr-20 resize-none border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="1"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        {/* Attachment Icon */}
        <button
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={() => console.log("Attachment clicked")}
        >
          <FaPaperclip size={18} />
        </button>

        {/* Right Icons */}
        {message.trim() === "" ? (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => console.log("Camera clicked")}
            >
              <FaCamera size={18} />
            </button>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => console.log("Microphone clicked")}
            >
              <LuAudioLines size={18} />
            </button>
          </div>
        ) : (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
            onClick={handleSend}
          >
            <MdSend size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatInputBox;
