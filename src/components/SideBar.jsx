import React, { useState } from 'react';
import {
  BsChevronRight,
  BsChevronLeft,
  BsGear,
  BsQuestionCircle,
} from "react-icons/bs";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const SidebarItem = ({ icon: Icon, text, onClick }) => (
    <li className="mt-2 group">
      <button
        onClick={onClick}
        className="w-full text-left group text-gray-500 hover:text-blue-600 cursor-pointer 
        flex items-center transition-all duration-300 ease-in-out 
        transform hover:translate-x-2 focus:outline-none"
      >
        {Icon && <Icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />}
        <span className="text-sm group-hover:font-semibold">{text}</span>
      </button>
    </li>
  );

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 focus:outline-none bg-white shadow-lg 
          rounded-full hover:bg-gray-100 transition-all duration-300"
        >
          <BsChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      )}

      <div
        className={`
          fixed 
          top-0 
          left-0 
          h-full 
          bg-white 
          text-gray-800 
          shadow-2xl 
          z-40 
          transition-all 
          duration-500 
          ease-in-out 
          overflow-hidden 
          ${isOpen ? 'w-64' : 'w-0'}
        `}
      >
        <div 
          className={`
            absolute 
            inset-0 
            transition-opacity 
            duration-500 
            ease-in-out 
            ${isOpen ? 'opacity-100' : 'opacity-0'}
            ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
          `}
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 z-50 p-2 focus:outline-none hover:bg-gray-100 rounded-full transition-all duration-300"
          >
            <BsChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <div className="p-4 flex flex-col h-full">
            <div className="flex-grow overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                  Recent
                </h2>
                <ul className="pl-0 list-none space-y-2">
                  <SidebarItem text="Java Coding Tips" onClick={() => console.log("Java Coding Tips clicked")} />
                  <SidebarItem text="Best Coding Practices" onClick={() => console.log("Best Coding Practices clicked")} />
                  <SidebarItem text="Code Refactoring" onClick={() => console.log("Code Refactoring clicked")} />
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                  Previous 7 Days
                </h2>
                <ul className="pl-0 list-none space-y-2">
                  <SidebarItem text="Java Coding Basics" onClick={() => console.log("Java Coding Basics clicked")} />
                  <SidebarItem text="Design Patterns" onClick={() => console.log("Design Patterns clicked")} />
                  <SidebarItem text="JDK 11 Install Process" onClick={() => console.log("JDK 11 Install Process clicked")} />
                  <SidebarItem text="Java Servlet Pages" onClick={() => console.log("Java Servlet Pages clicked")} />
                  <SidebarItem text="Simple Java Program" onClick={() => console.log("Simple Java Program")} />
                  <SidebarItem text="Get Started With Java" onClick={() => console.log("Get Started With Java clicked")} />
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-6">
              <div className="text-xs text-gray-500 mb-4 text-center">©XiroGPT</div>

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