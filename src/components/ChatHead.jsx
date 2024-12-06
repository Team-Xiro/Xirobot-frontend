import React from "react";

import { UserGroupIcon, PlusIcon } from "@heroicons/react/24/outline";

import profile1 from "../assets/profile1.jpg";

const ChatHead = ({ avatar, username }) => {
  return (
    <div className="flex items-center justify-between p-4 px-20 bg-blue-100">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <img src={profile1} alt="Avatar" className="w-10 h-10 rounded-md" />

        {/* Username */}
        <span className="text-2xl font-bold text-blue-900">
          Nipun Jayasinghe
        </span>
      </div>
      <div className="flex gap-2">
        <button className="relative w-12 h-12 bg-white rounded-md">
          <UserGroupIcon className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2" />
        </button>
        <button className="relative w-12 h-12 bg-white rounded-md">
          <PlusIcon className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2" />
        </button>
      </div>
    </div>
  );
};

export default ChatHead;
