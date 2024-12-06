// import React from "react";
// import profile1 from "../assets/profile1.jpg";
// import logo from "../assets/avatar.png";
// import CodeSnippet from "./CodeSnippet"; 

// const messages = [
//   {
//     position: "right",
//     type: "text",
//     text: "How to calculate n^p in Java?",
//     avatar: profile1,
//   },
//   {
//     position: "left",
//     type: "text",
//     text: "To calculate n^p, use the Math.pow() method from the java.lang package...",
//     avatar: logo,
//   },
//   {
//     position: "left",
//     type: "code",
//     avatar: logo,
//   },
// ];

// const Conversation = () => {
//   return (
//     <div className="w-2/3 p-4 overflow-auto">
//       {messages.map((message, index) => (
//         <div
//           key={index}
//           className={`flex items-start ${
//             message.position === "right" ? "flex-row-reverse" : ""
//           } mb-4`}
//         >
//           {/* Avatar */}
//           <img
//             src={message.avatar}
//             alt="Avatar"
//             className="w-10 h-10 rounded-md"
//           />

//           {/* Chat Bubble or Code Snippet */}
//           <div className="ml-2 mr-2">
//             {message.type === "text" ? (
//               <div
//                 className={`relative px-4 py-2 rounded-lg max-w-xl ${
//                   message.position === "right"
//                     ? "bg-white text-black"
//                     : "bg-white text-black"
//                 }`}
//               >
//                 {/* Bubble Beak */}
//                 <div
//                   className={`absolute top-4 ${
//                     message.position === "right"
//                       ? "left-full border-l-gray-300"
//                       : "right-full border-r-gray-300"
//                   } border-t-transparent border-b-transparent border-t-4 border-b-4 ${
//                     message.position === "right"
//                       ? "border-l-8"
//                       : "border-r-8"
//                   }`}
//                 ></div>
//                 {message.text}
//               </div>
//             ) : (
//               <CodeSnippet /> // Render the CodeSnippet if type is "code"
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Conversation;

import React from "react";
import profile1 from "../assets/profile1.jpg";
import logo from "../assets/avatar.png";
import CodeSnippet from "./CodeSnippet"; // Import CodeSnippet component

const messages = [
  {
    position: "right",
    type: "text",
    text: "How to calculate n^p in Java?",
    avatar: profile1,
  },
  {
    position: "left",
    type: "text",
    text: "To calculate n^p (n raised to the power p) in Java, you can use the Math.pow() method from the java.lang package. Here's how you can do it:",
    avatar: logo,
  },
  {
    position: "left",
    type: "code",
    avatar: logo,
  },
];

const Conversation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* The Conversation container */}
      <div className="w-2/3 p-4 overflow-auto rounded-md">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start ${
              message.position === "right" ? "flex-row-reverse" : ""
            } mb-4`}
          >
            {/* Avatar */}
            <img
              src={message.avatar}
              alt="Avatar"
              className="w-10 h-10 rounded-md"
            />

            {/* Chat Bubble or Code Snippet */}
            <div className="ml-2 mr-2">
              {message.type === "text" ? (
                <div
                  className={`relative px-4 py-2 rounded-lg max-w-xl ${
                    message.position === "right"
                      ? "bg-white text-black"
                      : "bg-white text-black"
                  }`}
                >
                  {/* Bubble Beak */}
                  <div
                    className={`absolute top-6 ${
                      message.position === "right"
                        ? "left-full border-l-white"
                        : "right-full border-r-white"
                    } border-t-transparent border-b-transparent border-t-4 border-b-4 ${
                      message.position === "right"
                        ? "border-l-8"
                        : "border-r-8"
                    }`}
                  ></div>
                  {message.text}
                </div>
              ) : (
                <CodeSnippet />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conversation;
