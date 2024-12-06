import React from "react";
import { UserGroupIcon, PlusIcon } from "@heroicons/react/24/outline";
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
          Friends Group
        </span>
      </div>

      <div className="flex gap-2">
        <button className="relative bg-white rounded-md h-14 w-14">
          <UserGroupIcon className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2" />
        </button>
        <button className="relative bg-white rounded-md h-14 w-14">
          <PlusIcon className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2" />
        </button>
      </div>
    </div>
  );
};

export default GroupChatHead;
