import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { BsGear, BsQuestionCircle } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri"; // Import the icon
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

const SideBar = ({ setSidebarOpen }) => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setSidebarOpen(!isOpen); // Notify parent about the state
  };

  const SidebarItem = ({ icon: Icon, text, onClick }) => (
    <li className="mt-2 group">
      <button
        onClick={onClick}
        className="w-full text-left group text-gray-500 hover:text-blue-600 cursor-pointer 
          flex items-center transition-all duration-300 ease-in-out 
          transform hover:translate-x-2 focus:outline-none"
      >
        <span className="text-sm group-hover:font-semibold">{text}</span>
        {Icon && (
          <Icon className="mr-3 ml-3 h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
        )}
      </button>
    </li>
  );

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 focus:outline-none bg-white shadow-lg 
            rounded-md hover:bg-gray-100 transition-all duration-300"
        >
          <GoSidebarCollapse className="h-6 w-6 text-gray-700" />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white text-gray-800 shadow-2xl z-40 transition-all 
            duration-500 ease-in-out overflow-hidden ${
              isOpen ? "w-72" : "w-0"
            }`}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          } ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 z-50 p-2 focus:outline-none hover:bg-gray-100 rounded-md transition-all duration-300"
          >
            <GoSidebarExpand className="h-6 w-6 text-gray-700" />
          </button>

          <div className="p-4 flex flex-col h-full overflow-hidden">
            <div className="flex-grow overflow-y-auto overflow-x-hidden">
              <div className="mb-6">
                <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                  Recent
                </h2>
                <ul className="pl-0 list-none space-y-2">
                  <SidebarItem
                    text="Java Coding Tips"
                    onClick={() => navigate("/chat")} // Navigate to NewPage2
                  />
                  <SidebarItem
                    text="Best Coding Practices"
                    icon={RiGroupLine} // Add the RiGroupLine icon here
                    onClick={() => navigate("/groupchat")} // Navigate to NewPage2
                  />
                  <SidebarItem
                    text="Code Refactoring"
                    onClick={() => navigate("/chat")} // Navigate to NewPage2
                  />
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                  Previous 7 Days
                </h2>
                <ul className="pl-0 list-none space-y-2">
                  <SidebarItem
                    text="Java Coding Basics"
                    onClick={() => navigate("/chat")} // Navigate to NewPage2
                  />
                  <SidebarItem
                    text="Design Patterns"
                    icon={RiGroupLine} // Add the RiGroupLine icon here
                    onClick={() => navigate("/groupchat")} // Navigate to NewPage2
                  />
                  <SidebarItem
                    text="JDK 11 Install Process"
                    onClick={() => navigate("/chat")} // Navigate to NewPage2
                  />
                  <SidebarItem
                    text="Java Servlet Pages"
                    onClick={() => navigate("/chat")} // Navigate to NewPage2
                  />
                  <SidebarItem
                    text="Simple Java Program"
                    onClick={() => console.log("Simple Java Program clicked")}
                  />
                  <SidebarItem
                    text="Get Started With Java"
                    onClick={() => console.log("Get Started With Java clicked")}
                  />
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-6">
              <div className="text-xs text-gray-500 mb-4 text-center">
                ©XiroGPT
              </div>

              <ul className="flex justify-between items-center px-4">
                <li className="flex">
                  <SidebarItem
                    icon={BsQuestionCircle}
                    text="Help"
                    onClick={() => console.log("Help clicked")}
                  />
                </li>
                <li className="flex">
                  <SidebarItem
                    icon={BsGear}
                    text="Settings"
                    onClick={() => console.log("Settings clicked")}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
