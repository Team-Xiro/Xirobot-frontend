import React, { useState } from 'react';
import { BsChevronRight, BsChevronLeft, BsGear, BsQuestionCircle} from "react-icons/bs";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
       <button
       onClick={toggleSidebar}
       className="fixed top-4 left-4 z-50 p-2 focus:outline-none"
     >
       <BsChevronRight className="h-6 w-6" />
     </button>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white text-gray-800 shadow-lg z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-64' : 'w-0 overflow-hidden'
        }`}
      >
        <button
  onClick={toggleSidebar}
  className="absolute top-4 right-4 z-50 p-2 focus:outline-none"
>
  <BsChevronLeft className="h-6 w-6 text-black" />
</button>

        {isOpen && (
         <div className="p-4 opacity-100 transition-opacity duration-300 ease-in-out">
         <div className="mt-10 mb-4 ml-5">
           <p className="text-sm font-bold text-gray-800">Recent</p>
           <ul className="ml-2">
             <li className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer">
               Java Coding Tips
             </li>
             <li className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer">
               Best Coding Practices
             </li>
             <li className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer">
               Code Refactoring 
             </li>
           </ul>
         </div>
         
         <div className="mt-10 mb-4 ml-4">
           <p className="text-sm font-bold text-gray-800">Previous 7 Days</p>
           <ul className="ml-2">
             <li className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer">
               Java Coding Basics
             </li>
             <li className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer">
               Design Patterns
             </li>
             <li className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer">
               JDK 11 Install Process
             </li>
             <li className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer">
               Java Servelet Pages 
             </li>
             <li className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer">
               Simple Yoga Routine 
             </li>
             <li className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer">
               Get Stared With Java 
             </li>
           </ul>
         </div>

         <div className="mt-20 flex flex-col border-t border-gray-300 pt-2">
    <div className="text-gray-400 hover:text-gray-800 cursor-pointer flex items-center mb-2">
      <BsQuestionCircle className="mr-2 h-5 w-5" />
      Help
    </div>
    <div className="text-gray-400 hover:text-gray-800 cursor-pointer flex items-center">
      <BsGear className="mr-2 h-5 w-5" />
      Settings
    </div>
    </div>
    </div>
       
        )}
      </div>
    </>
  );
};

export default SideBar;