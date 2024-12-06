import React from "react";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";

const GroupChatHead = () => {
  return (
    <div className="flex items-center justify-between p-4 px-20 bg-blue-100">
      <div className="flex items-center gap-4">
        <div className="relative flex items-center">

          <div className="absolute z-30 w-10 h-10 translate-x-0 rounded-full">
            <img
              src={profile3}
              alt="Profile1"
              className="w-full h-full rounded-md"
            />
          </div>

          {/* Middle image with overlay */}
          <div className="absolute z-20 w-10 h-10 translate-x-8 rounded-full">
            <img
              src={profile2}
              alt="Profile2"
              className="w-full h-full rounded-md"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-40"></div>
          </div>

          {/* Bottom image with overlay and "+2" text */}
          <div className="absolute w-10 h-10 translate-x-16 rounded-full">
            <img
              src={profile1}
              alt="Profile3"
              className="w-full h-full rounded-md"
            />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black rounded-md opacity-60">
            <span className="text-lg font-semibold text-white">+2</span>
          </div>
          </div>
        </div>

        {/* Group Name */}
        <span className="ml-24 text-2xl font-bold text-blue-900">
          New Project Brainstorm
        </span>
      </div>

      <div className="flex gap-2">
        <button className="relative w-12 h-12 bg-white rounded-md">
          
        </button>
        <button className="relative w-12 h-12 bg-white rounded-md">
            
        </button>
      </div>
    </div>
  );
};

export default GroupChatHead;
