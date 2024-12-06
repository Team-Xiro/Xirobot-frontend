import React, { useState } from "react";
import ChatInvitePopup from "./ChatInvitePopup";
import nipun from "../image/memb1.jpeg";
import daryl from "../image/daryl.jpg";
import donald from "../image/donald.jpg";
import kim from "../image/kim.jpg";
import saman from "../image/saman.jpg";
import sam from "../image/sam.jpg";

const PopUpWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [members, setMembers] = useState([
    { name: "Nipun Jayasinghe", image: nipun, remove: true },
    { name: "Sam Weerakon", image: sam, remove: true },
    { name: "Jayanthi Hewage", image: donald, remove: true },
    { name: "Daryl Mitchelle", image: saman, remove: true },
    { name: "Matt Smith", image: daryl, remove: true },
  ]);
  const [newMember, setNewMember] = useState("");
  const [newMemberImage, setNewMemberImage] = useState(
    "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
  );

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handleAddMember = () => {
    if (newMember.trim() !== "") {
      setMembers([
        ...members,
        {
          name: newMember.trim(),
          image:
            "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png",
          remove: true,
        },
      ]);
      setNewMember("");
    }
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={togglePopUp}
      >
        Open Pop-Up
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
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

export default PopUpWindow;
