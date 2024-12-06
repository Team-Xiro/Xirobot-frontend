// import React from "react";

// import { PlusIcon, UserGroupIcon } from "@heroicons/react/24/outline";
// import "react-chat-elements/dist/main.css";

// // import CodeSnippet from "../components/CodeSnippet";

// import profile1 from "../assets/profile1.jpg";
// import profile2 from "../assets/profile2.jpg";
// import profile3 from "../assets/profile3.jpg";
// import logo from "../assets/avatar.png";

// const messages = [
//   {
//     position: "right",
//     type: "text",
//     text: "How to calculate n^p in java?",
//     avatar: profile1,
//   },
//   {
//     position: "left",
//     type: "text",
//     text: "To calculate npn^pnp (n raised to the power p) in Java, you can use the Math.pow() method from the java.lang package. Here's how you can do it:",
//     avatar: logo,
//   },
// ];

// const Chat = () => {
//   return (
//     <>
//       <div className="relative w-48 h-64">
//         {/* Top image */}
//         <img
//           src={profile1}
//           alt="Profile1"
//           className="absolute left-0 z-30 w-16 rounded-md"
//         />

//         {/* Middle image with overlay */}
//         <div className="absolute z-20 w-16 rounded-md left-12">
//           <img src={profile2} alt="Profile2" className="w-full rounded-md" />
//           <div className="absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-40"></div>
//         </div>

//         {/* Bottom image with overlay and "+2" text */}
//         <div className="absolute z-10 w-16 rounded-md left-24">
//           <img src={profile3} alt="Profile3" className="w-full rounded-md" />
//           <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black rounded-md opacity-60">
//             <span className="text-lg font-semibold text-white">+2</span>
//           </div>
//         </div>
//       </div>
//       <h3 className="text-3xl font-semibold">Hypothesis in Statistics</h3>
//       <button className="relative mr-2 bg-white rounded-md h-14 w-14">
//         <UserGroupIcon className="absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2" />
//       </button>
//       <button className="relative mr-2 bg-white rounded-md h-14 w-14">
//         <PlusIcon className="absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2" />
//       </button>
//       <div className="w-3/5 overflow-auto h-96">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`flex items-start ${
//               message.position === "right" ? "flex-row-reverse" : ""
//             }`}
//           >
//             {/* Avatar */}
//             <img
//               src={message.avatar}
//               alt="Avatar"
//               className="w-10 rounded-md"
//             />

//             {/* Chat Bubble */}
//             <div
//               className={`relative px-4 py-2 ml-2 mr-2 max-w-xl rounded-lg ${
//                 message.position === "right"
//                   ? "bg-white text-gray-800"
//                   : "bg-white text-gray-800"
//               }`}
//             >
//               {/* Bubble Beak */}
//               <div
//                 className={`absolute top-6 ${
//                   message.position === "right"
//                     ? "left-full border-l-white border-l-8 border-t-transparent border-t-4 border-b-transparent border-b-4"
//                     : "right-full border-r-white border-r-8 border-t-transparent border-t-4 border-b-transparent border-b-4"
//                 }`}
//               ></div>
//               {message.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Chat;
