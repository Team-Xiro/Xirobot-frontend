import React from "react";
import ChatHead from "../components/ChatHead";
import Conversation from "../components/Conversation";
import ChatInputBox from "../components/ChatInputBox";

const NewPage2 = () => {
  return (
    <>
      <ChatHead />
      <Conversation />
      <div className="fixed w-3/5 bottom-4 left-1/2 transform -translate-x-1/2">
        <ChatInputBox />
      </div>
    </>
  );
};

export default NewPage2;
