import React from "react";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";

import logo from "../assets/avatar.png";
import CodeSnippet from "./CodeSnippet";

const messages = [
  {
    position: "right",
    type: "text",
    text: "Hey @XiroGPT, we’re brainstorming ideas for a school project. Do you have any suggestions?",
    avatar: profile2,
  },
  {
    position: "left",
    type: "text",
    text: "Sure, @Senith How about creating a project that focuses on environmental sustainability? You could develop an awareness campaign or even create a tool that helps people track their carbon footprint. It’s a topic that’s both important and relevant today.",
    avatar: logo,
  },
  {
    position: "right",
    type: "text",
    text: "I like that idea @XiroGPT! How about a project that combines technology and education? Something that helps students learn better.",
    avatar: profile3,
  },
  {
    position: "left",
    type: "text",
    text: "Great idea, @Buddhima! You could create an interactive app or website that uses gamification to make learning more fun. For example, a platform where students earn points or badges for completing quizzes or lessons. This kind of approach can help make learning more engaging.",
    avatar: logo,
  },
  {
    position: "right",
    type: "text",
    text: "@XiroGPT, I’m thinking of a project that involves mental health. How can we incorporate mental health support in a way that’s accessible to everyone?",
    avatar: profile1,
  },
  {
    position: "left",
    type: "text",
    text: "That’s a very thoughtful direction, @Nipun! You could develop a mental health resource app that provides easy access to coping mechanisms, resources for self-care, and direct links to professional help. You could also add a feature where users can check in with their emotions and receive personalized advice. Accessibility could be enhanced by making it available in multiple languages and ensuring it’s user-friendly for people with different abilities.",
    avatar: logo,
  },
];


const GroupConversation = () => {

    const highlightSpecificMentions = (text) => {
        const mentions = ["@XiroGPT", "@Senith", "@Buddhima", "@Nipun"];
        const mentionRegex = new RegExp(`(${mentions.join("|")})`, "g");
      
        return text.split(mentionRegex).map((part, index) =>
          mentions.includes(part) ? (
            <span key={index} className="text-blue-500 cursor-pointer">
              {part}
            </span>
          ) : (
            part
          )
        );
      };

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
                      message.position === "right" ? "border-l-8" : "border-r-8"
                    }`}
                  ></div>
                  {highlightSpecificMentions(message.text)}
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

export default GroupConversation;
