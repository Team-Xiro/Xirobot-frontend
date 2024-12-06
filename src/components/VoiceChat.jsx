import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { XMarkIcon } from "@heroicons/react/24/outline";

const VoiceChat = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate("/chat"); // Navigate to the chat page when the button is clicked
  };
  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <span className="text-3xl font-semibold">
          Xiro is listening
          <motion.span
            animate={{ opacity: [1, 0.5, 0.5, 1] }}
            transition={{
              duration: 1.5,
              loop: Infinity,
              times: [0, 0.33, 0.66, 1],
            }}
          >
            ...
          </motion.span>
        </span>
      </div>
      <div className="flex items-center justify-center -mt-36">
        <Spline scene="https://prod.spline.design/bFZEikdtv0iqYUYR/scene.splinecode" />
      </div>
      <div className="flex items-center justify-center -mt-36">
        <button
          onClick={handleClick} // Call handleClick function on button click
          className="relative w-12 h-12 mx-2 bg-white rounded-md"
        >
          <XMarkIcon className="absolute border-2 rounded-md w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2" />
        </button>
      </div>
    </>
  );
};

export default VoiceChat;
