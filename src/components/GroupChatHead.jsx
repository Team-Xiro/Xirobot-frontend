import React, { useState } from "react";
import ChatInvitePopup from "./ChatInvitePopup";
//import PopUpWindow from "./addnewmemb";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

import { PlusIcon } from "@heroicons/react/24/outline";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import nipun from "../image/memb1.jpeg";
import daryl from "../image/daryl.jpg";
import donald from "../image/donald.jpg";
// import kim from "../image/kim.jpg";
import saman from "../image/saman.jpg";
import sam from "../image/sam.jpg";

const GroupChatHead = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [members, setMembers] = useState([
    { name: "Nipun Jayasinghe", image: nipun, remove: true },
    { name: "Sam Weerakon", image: sam, remove: true },
    { name: "Jayanthi Hewage", image: donald, remove: true },
    { name: "Daryl Mitchelle", image: saman, remove: true },
    { name: "Matt Smith", image: daryl, remove: true },
  ]);
  const [newMember, setNewMember] = useState("");
  // const [newMemberImage, setNewMemberImage] = useState(
  //   "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
  // );

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate("/"); // Navigate to the chat page when the button is clicked
  };

  // const handleAddMember = () => {
  //   if (newMember.trim() !== "") {
  //     setMembers([
  //       ...members,
  //       {
  //         name: newMember.trim(),
  //         image:
  //           "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png",
  //         remove: true,
  //       },
  //     ]);
  //     setNewMember("");
  //   }
  // };

  const handleRemoveMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      {/* Main Content */}
      <div
        className={`flex items-center justify-between p-4 px-52 mb-16 ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <button
            className="groupbutton relative w-12 h-12"
            onClick={togglePopUp}
          >
            <div className="relative flex items-center">
              <div className="absolute z-30 w-10 h-10 translate-x-0 rounded-full">
                <img
                  src={profile3}
                  alt="Profile1"
                  className="w-full h-full rounded-md"
                />
              </div>

              <div className="absolute z-20 w-10 h-10 translate-x-8 rounded-full">
                <img
                  src={profile2}
                  alt="Profile2"
                  className="w-full h-full rounded-md"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-40"></div>
              </div>

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
          </button>

          <span className="ml-24 text-2xl font-bold text-blue-900">
            New Project Brainstorm
          </span>
        </div>

        <div className="flex gap-2">
          {/* <button
            className="relative w-12 h-12 bg-white rounded-md"
            onClick={togglePopUp}
          >
            <UserGroupIcon className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2" />
          </button> */}
          <button className="relative w-11 h-11 bg-white rounded-md">
            <PlusIcon
              onClick={handleClick} // Call handleClick function on button click
              className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2"
            />
          </button>
        </div>
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">People in the Chat</h2>
              <div className="flex items-center">
                <button onClick={togglePopUp}>&times;</button>
              </div>
            </div>

            <div>
              {members.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b"
                >
                  <div className="flex items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span>{member.name}</span>
                  </div>
                  {member.remove && (
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveMember(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            <br></br>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsPopupOpen(true)}
            >
              Add
            </button>
            <ChatInvitePopup
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupChatHead;
